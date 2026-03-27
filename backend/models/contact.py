
from typing import Optional
from datetime import datetime


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=9, max_length=20)
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    subject: str
    message: str
    status: str = "pending"
    created_at: datetime
    
    class Config:
        from_attributes = True
