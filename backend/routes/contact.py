
from datetime import datetime
from bson import ObjectId
from models.contact import ContactCreate, ContactResponse

router = APIRouter(prefix="/contact", tags=["contact"])


def get_db():
    """Get database connection from app state"""
    from server import db
    return db


@router.post("", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
async def create_contact(contact: ContactCreate):
    """
    Create a new contact submission from the website form
    """
    try:
        db = get_db()
        contacts_collection = db.contacts
        
        # Prepare contact document
        contact_dict = contact.model_dump()
        contact_dict["status"] = "pending"
        contact_dict["created_at"] = datetime.utcnow()
        
        # Insert into database
        result = await contacts_collection.insert_one(contact_dict)
        
        # Fetch the inserted document
        created_contact = await contacts_collection.find_one({"_id": result.inserted_id})
        
        # Convert ObjectId to string for response
        created_contact["id"] = str(created_contact.pop("_id"))
        
        return ContactResponse(**created_contact)
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating contact: {str(e)}"
        )


@router.get("", response_model=list[ContactResponse])
async def get_all_contacts(
    status_filter: str = None,
    limit: int = 100
):
    """
    Get all contact submissions (for admin use)
    Optional status filter: pending, read, replied
    """
    try:
        db = get_db()
        contacts_collection = db.contacts
        
        query = {}
        if status_filter:
            query["status"] = status_filter
        
        # Project only necessary fields for performance
        projection = {
            "_id": 1, "name": 1, "email": 1, "phone": 1, 
            "subject": 1, "message": 1, "status": 1, "created_at": 1
        }
        contacts = await contacts_collection.find(query, projection).sort("created_at", -1).limit(limit).to_list(limit)
        
        # Convert ObjectId to string
        for contact in contacts:
            contact["id"] = str(contact.pop("_id"))
            
        return [ContactResponse(**contact) for contact in contacts]
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching contacts: {str(e)}"
        )


@router.get("/{contact_id}", response_model=ContactResponse)
async def get_contact_by_id(contact_id: str):
    """
    Get a specific contact by ID
    """
    try:
        db = get_db()
        contacts_collection = db.contacts
        
        if not ObjectId.is_valid(contact_id):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid contact ID format"
            )
            
        contact = await contacts_collection.find_one({"_id": ObjectId(contact_id)})
        
        if not contact:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact not found"
            )
            
        contact["id"] = str(contact.pop("_id"))
        return ContactResponse(**contact)
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching contact: {str(e)}"
        )


@router.patch("/{contact_id}/status")
async def update_contact_status(contact_id: str, new_status: str):
    """
    Update the status of a contact (pending, read, replied)
    """
    try:
        db = get_db()
        contacts_collection = db.contacts
        
        if new_status not in ["pending", "read", "replied"]:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid status. Must be: pending, read, or replied"
            )
            
        if not ObjectId.is_valid(contact_id):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid contact ID format"
            )
            
        result = await contacts_collection.update_one(
            {"_id": ObjectId(contact_id)},
            {"$set": {"status": new_status}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact not found"
            )
            
        return {"message": "Status updated successfully", "status": new_status}
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error updating contact status: {str(e)}"
        )


@router.delete("/{contact_id}")
async def delete_contact(contact_id: str):
    """
    Delete a contact submission
    """
    try:
        db = get_db()
        contacts_collection = db.contacts
        
        if not ObjectId.is_valid(contact_id):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid contact ID format"
            )
            
        result = await contacts_collection.delete_one({"_id": ObjectId(contact_id)})
        
        if result.deleted_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact not found"
            )
            
        return {"message": "Contact deleted successfully"}
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error deleting contact: {str(e)}"
        )
