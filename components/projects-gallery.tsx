"use client"

import ProjectCard from "./project-card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Parquet Chêne Massif - Villa Marrakech",
    coverImage: "/1.jpg",
    category: "Plancher Intérieur",
    images: [
      {
        src: "/1.jpg",
        alt: "Salon avec parquet chêne massif",
      },
      {
        src: "/1.jpg",
        alt: "Chambre avec plancher bois naturel",
      },
      {
        src: "/1.jpg",
        alt: "Couloir avec parquet traditionnel",
      },
      {
        src: "/1.jpg",
        alt: "Détail finition parquet chêne",
      },
      {
        src: "/1.jpg",
        alt: "Vue d'ensemble installation terminée",
      },
    ],
  },
  {
    id: 2,
    title: "Terrasse Bois Exotique - Riad",
    coverImage: "/1.jpg",
    category: "Plancher Extérieur",
    images: [
      {
        src: "/1.jpg",
        alt: "Terrasse bois exotique avant installation",
      },
      {
        src: "/1.jpg",
        alt: "Préparation support terrasse",
      },
      {
        src: "/1.jpg",
        alt: "Installation lames de terrasse",
      },
      {
        src: "/1.jpg",
        alt: "Finition bordures terrasse",
      },
      {
        src: "/1.jpg",
        alt: "Terrasse bois terminée avec mobilier",
      },
    ],
  },
  {
    id: 3,
    title: "Stratifié Premium - Appartement Moderne",
    coverImage: "/1.jpg",
    category: "Plancher Intérieur",
    images: [
      {
        src: "/1.jpg",
        alt: "Salon moderne avec stratifié premium",
      },
      {
        src: "/1.jpg",
        alt: "Cuisine ouverte plancher stratifié",
      },
      {
        src: "/1.jpg",
        alt: "Chambre avec sol stratifié effet bois",
      },
      {
        src: "/1.jpg",
        alt: "Détail pose stratifié sans colle",
      },
      {
        src: "/1.jpg",
        alt: "Finition plinthes et seuils",
      },
    ],
  },
  {
    id: 4,
    title: "Rénovation Parquet Ancien - Maison Traditionnelle",
    coverImage: "/1.jpg",
    category: "Rénovation",
    images: [
      {
        src: "/1.jpg",
        alt: "Parquet ancien avant rénovation",
      },
      {
        src: "/1.jpg",
        alt: "Ponçage parquet traditionnel",
      },
      {
        src: "/1.jpg",
        alt: "Application vernis protection",
      },
      {
        src: "/1.jpg",
        alt: "Parquet rénové brillant",
      },
      {
        src: "/1.jpg",
        alt: "Salon avec parquet restauré",
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
