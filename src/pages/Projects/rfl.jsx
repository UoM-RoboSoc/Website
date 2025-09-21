import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data';
import AboutPage from '@site/src/data/rfl/about.mdx';

export default function RFL() {

  const project = projects.find(obj => {
    return obj.id === 'rfl'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
