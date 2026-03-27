import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { portfolioProjects } from '../mock';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showBefore, setShowBefore] = useState(true);

  const categories = ['all', 'Pintura', 'Pavimentação', 'Telhados'];

  const filteredProjects = filter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-3 mb-4">
              Projetos Realizados
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos concluídos com excelência e dedicação.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? 'default' : 'outline'}
                onClick={() => setFilter(cat)}
                className={
                  filter === cat
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600'
                }
              >
                {cat === 'all' ? 'Todos' : cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  project.hasBeforeAfter ? 'cursor-pointer' : ''
                }`}
                onClick={() => project.hasBeforeAfter && setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  {project.hasBeforeAfter && (
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="bg-white text-navy-900 hover:bg-gray-100 w-full"
                      >
                        Ver Antes/Depois
                      </Button>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Detail Modal */}
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-navy-900">
                  {selectedProject?.title}
                </DialogTitle>
              </DialogHeader>
              
              {selectedProject && (
                <div>
                  <Badge className="bg-primary-600 text-white mb-4">
                    {selectedProject.category}
                  </Badge>
                  
                  <p className="text-gray-600 mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Before/After Comparison */}
                  <div className="relative">
                    <Tabs defaultValue="comparison" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="comparison">Comparação</TabsTrigger>
                        <TabsTrigger value="slider">Antes/Depois</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="comparison">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Antes</p>
                            <img
                              src={selectedProject.beforeImage}
                              alt="Antes"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Depois</p>
                            <img
                              src={selectedProject.afterImage}
                              alt="Depois"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="slider">
                        <div className="relative">
                          <img
                            src={showBefore ? selectedProject.beforeImage : selectedProject.afterImage}
                            alt={showBefore ? 'Antes' : 'Depois'}
                            className="w-full h-96 object-cover rounded-lg"
                          />
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <Button
                              onClick={() => setShowBefore(!showBefore)}
                              className="bg-white text-navy-900 hover:bg-gray-100"
                            >
                              {showBefore ? 'Ver Depois' : 'Ver Antes'}
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
