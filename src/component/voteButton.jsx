// VotingButton.jsx

const VotingButton = () => {
  return (
    <div>
     <nav className="bg-blue-600 p-4 fixed w-full top-0 z-10">
  <div className="flex justify-between items-center">
    <a href="/" className="text-white text-2xl">HackVote</a>
    <div className="space-x-4">
      <a href="/projects" className="text-white">Browse Projects</a>
      <a href="/vote" className="text-white">Vote</a>
      <a href="/results" className="text-white">Results</a>
    </div>
  </div>
</nav>


    </div>
  )
}

export default VotingButton
