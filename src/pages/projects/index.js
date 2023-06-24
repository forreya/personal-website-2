import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container, MainWrapper } from "../../styles/pages/ProjectMain";
import ProjectCard from "../../components/ProjectCard";
import { useRouter } from "next/router";
import { Zoom } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
import PageTitle from "../../components/PageTitle";

export default function Blog({ projects }) {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Ryan Lai | Projects</title>
      </Head>
      <PageTitle title="projects" stretchedLetter="b" overlayTitle="development | testing | deployment" />
      <MainWrapper>
        <Zoom>
          {projects.map((project, index) => {
            return (
              <Tilt
                tiltReverse={true}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                gyroscope={true}
                key={index}
              >
                <ProjectCard
                  date={project.data.date}
                  title={project.data.title}
                  image={project.data.image}
                  description={project.data.description}
                  categories={project.data.tags}
                  onClick={() => window.open(project.data.link, "_blank")}
                />
              </Tilt>
            );
          })}
        </Zoom>
      </MainWrapper>
    </Container>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/projects"));
  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownMetaData = fs.readFileSync(
      path.join("src/projects", filename),
      "utf-8"
    );

    const { data } = matter(markdownMetaData);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      projects,
    },
  };
};
