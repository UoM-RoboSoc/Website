import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data/projects';
import AboutPage from '@site/src/data/cubo/about.mdx';

export default function Cubo() {

  const project = projects.find(obj => {
    return obj.id === 'cubo'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
