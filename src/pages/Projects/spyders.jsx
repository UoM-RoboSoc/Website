import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data/projects';
import AboutPage from '@site/src/data/spyders/about.mdx';

export default function Spyders() {

  const project = projects.find(obj => {
    return obj.id === 'spyders'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
