"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const posts = [
  {
    title: "Primer Post",
    description: "Descripción del primer post.",
    date: "28 de julio, 2024",
    link: "/post/primer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Segundo Post",
    description: "Descripción del segundo post.",
    date: "15 de junio, 2024",
    link: "/post/segundo-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Tercer Post",
    description: "Descripción del tercer post.",
    date: "5 de mayo, 2024",
    link: "/post/tercer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Cuarto Post",
    description: "Descripción del primer post.",
    date: "28 de julio, 2024",
    link: "/post/primer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Quinto Post",
    description: "Descripción del segundo post.",
    date: "15 de junio, 2024",
    link: "/post/segundo-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Sexto Post",
    description: "Descripción del tercer post.",
    date: "5 de mayo, 2024",
    link: "/post/tercer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Setimo Post",
    description: "Descripción del primer post.",
    date: "28 de julio, 2024",
    link: "/post/primer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Octavo Post",
    description: "Descripción del segundo post.",
    date: "15 de junio, 2024",
    link: "/post/segundo-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Noveno Post",
    description: "Descripción del tercer post.",
    date: "5 de mayo, 2024",
    link: "/post/tercer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Decimo Post",
    description: "Descripción del primer post.",
    date: "28 de julio, 2024",
    link: "/post/primer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Decimo Primero Post",
    description: "Descripción del segundo post.",
    date: "15 de junio, 2024",
    link: "/post/segundo-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Decimo Segundo Post",
    description: "Descripción del tercer post.",
    date: "5 de mayo, 2024",
    link: "/post/tercer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
  {
    title: "Decimo Tercero Post",
    description: "Descripción del tercer post.",
    date: "5 de mayo, 2024",
    link: "/post/tercer-post",
    image: "/cards/go.png",
    avatar: "/avatar.png",
  },
];

const ITEMS_PER_PAGE = 6;

const CardGrid = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const maxPage = Math.ceil(posts.length / ITEMS_PER_PAGE) - 1;
      return prevPage < maxPage ? prevPage + 1 : prevPage;
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(posts.length / ITEMS_PER_PAGE) - 1;

  return (
    <div className="container mx-auto py-16 px-4 bg-background">
      <h1 className="my-8">Publicaciones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedPosts.map((post, index) => (
          <Card key={index} className="w-full hover:shadow-lg duration-300 transition-all ease-in-out hover:scale-105 hover:shadow-card-foreground cursor-pointer">
            <CardHeader className="p-0">
              <Image
                src={post.image}
                alt={`Imagen de ${post.title}`}
                width={600}
                height={400}
                className="rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent className="mt-4">
              <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
              <CardDescription className="">{post.description}</CardDescription>
              <div className="flex items-center mt-4">
                <Image
                  src={post.avatar}
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="pl-3 w-full h-full text-sm flex justify-start items-end gap-2">
                  <p className="font-semibold text-muted-foreground mt-0 mb-0 leading-none">
                    Publicado el
                  </p>
                  <p className="font-bold leading-none">{post.date}</p>
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
      <div className="w-full my-6 flex justify-between px-12">
        <div className="text-sm font-semibold w-1/2 justify-start flex items-center">
          <p className="">Página {currentPage + 1} de {Math.ceil(posts.length / ITEMS_PER_PAGE)}</p>
        </div>
        <Pagination className="w-1/2 justify-end">
          <PaginationContent>
            <PaginationItem onClick={handlePreviousPage} className={cn(isFirstPage && "hidden")}>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem onClick={handleNextPage} className={cn(isLastPage && "hidden")}>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>


      <div className="container mx-auto bg-background">
        <div className="py-16">
          <Separator className="bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
