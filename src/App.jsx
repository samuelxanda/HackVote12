import Leaderboard from './component/leaderboard'
import ProjectList from './component/projectList'
import VotingButton from './component/voteButton'

function App() {
  return (
    <>
     <h1 className='title bg-slate-600'>Hello World</h1>
     <VotingButton />
      <ProjectList />
      <Leaderboard />
    </>
  )
}

export default App
