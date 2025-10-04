import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data/projects';
import AboutPage from '@site/src/data/bespoke/about.mdx';

export default function Bespoke() {

  const project = projects.find(obj => {
    return obj.id === 'bespoke'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
