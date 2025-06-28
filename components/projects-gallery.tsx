"use client"

import ProjectCard from "./project-card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Villa Moderne à Marrakech",
    coverImage: "/1.jpg",
    category: "Résidentiel",
    images: [
      {
        src: "/1.jpg",
        alt: "Salon moderne avec vue sur jardin",
      },
      {
        src: "/1.jpg",
        alt: "Cuisine ouverte avec îlot central",
      },
      {
        src: "/1.jpg",
        alt: "Suite parentale avec dressing",
      },
      {
        src: "/1.jpg",
        alt: "Salle de bain en marbre",
      },
      {
        src: "/1.jpg",
        alt: "Terrasse avec piscine",
      },
    ],
  },
  {
    id: 2,
    title: "Clinique Dentaire Premium",
    coverImage: "/1.jpg",
    category: "Médical",
    images: [
      {
        src: "/1.jpg",
        alt: "Réception de la clinique",
      },
      {
        src: "/1.jpg",
        alt: "Salle d'attente",
      },
      {
        src: "/1.jpg",
        alt: "Cabinet de consultation",
      },
      {
        src: "/1.jpg",
        alt: "Salle de soins",
      },
      {
        src: "/1.jpg",
        alt: "Bureau administratif",
      },
    ],
  },
]

export default function ProjectsGallery() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          coverImage={project.coverImage}
          images={project.images}
          category={project.category}
        />
      ))}
    </div>
  )
}
