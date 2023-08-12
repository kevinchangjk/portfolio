import { Project } from "@/utils/types";
import { Heading, VStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { projects } from "@/data/projects.json";
import { useAppContext } from "@/context/state";
import { useEffect, useState } from "react";

export default function ProjectPage({ project }: { project: Project }) {
  const { enroute } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!project) {
      enroute("/404", {scroll: true} );
    } else {
      setIsLoading(false);
    }
  }, [project]);

    if (isLoading) {
      return (
      <></>
      );
    }else {
      return (
    <main>
      <VStack
        marginTop={{
          base: "6vh",
          md: "12vh",
          xl: "16vh",
          "2xl": "20vh",
        }}
        spacing={{
          base: "4rem",
          md: "5rem",
          xl: "6rem",
          "2xl": "7rem",
        }}
        width={{
          base: "full",
          md: "2xl",
          xl: "4xl",
          "2xl": "5xl",
        }}
      >
        <Heading>
          {project.title}
        </Heading>
      </VStack>
    </main>
  );
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;
  if (typeof name !== "string") {
    return { props: {} };
  }

  let project: Project | null = null;
  for (const projectData of projects) {
    if (name === projectData.name) {
      project = projectData;
    }
  }

  const props = {
    project
  };

  return { props };
};
