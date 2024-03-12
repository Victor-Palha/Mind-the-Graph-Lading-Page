import './global.css'

import { MindGraphVisualizer } from './components/MindGraphVisualizer'
import { ScienceSimplicityCreator } from './components/ScienceSimplicityCreator'
import { ScienceCreationExplorer } from './components/ScienceCreationExplorer'

export function App(){
  return (
    <>
      <ScienceCreationExplorer />
      <MindGraphVisualizer />
      <ScienceSimplicityCreator />
    </>
  )
}