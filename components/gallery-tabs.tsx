"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import BeforeAfterSlider from "@/components/before-after-slider"
import ProjectsGallery from "@/components/projects-gallery"

interface GalleryTabsProps {
  beforeAfterItems: {
    id: number
    beforeImage: string
    afterImage: string
  }[]
}

export default function GalleryTabs({ beforeAfterItems }: GalleryTabsProps) {
  return (
    <Tabs defaultValue="before-after" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-gray-100 p-1 rounded-full">
          <TabsTrigger
            value="before-after"
            className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Avant / Après
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Projets
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="before-after" className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {beforeAfterItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <BeforeAfterSlider items={[item]} />
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="projects" className="mt-8">
        <ProjectsGallery />
      </TabsContent>
    </Tabs>
  )
}
