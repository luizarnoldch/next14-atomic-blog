import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Primer Post",
    description: "Descripción del primer post.",
    date: "28 de julio, 2024",
    link: "/post/primer-post",
    image: "/cards/card.png",
    avatar: "/avatar.png",
  },
  {
    title: "Segundo Post",
    description: "Descripción del segundo post.",
    date: "15 de junio, 2024",
    link: "/post/segundo-post",
    image: "/cards/card.png",
    avatar: "/avatar.png",
  },
  {
    title: "Tercer Post",
    description: "Descripción del tercer post.",
    date: "5 de mayo, 2024",
    link: "/post/tercer-post",
    image: "/cards/card.png",
    avatar: "/avatar.png",
  },
  // Agrega más posts aquí
];

const CardGrid = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="my-8">Publicaciones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="p-0">
              <Image
                src={post.image}
                alt={`Imagen de ${post.title}`}
                width={600}
                height={400}
                className="rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
              <div className="flex items-center mt-4">
                <Image
                  src={post.avatar}
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3 text-sm text-muted-foreground">
                  <p className="font-semibold">Publicado el</p>
                  <p>{post.date}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="link" asChild>
                <Link href={post.link}>Leer más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;