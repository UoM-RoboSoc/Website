import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data';
import AboutPage from '@site/src/data/buggy/about.mdx';

export default function Buggy() {

  const project = projects.find(obj => {
    return obj.id === 'buggy'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
