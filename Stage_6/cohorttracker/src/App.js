import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails 
        name="Java Fullstack May 2025" 
        status="ongoing" 
        startDate="01-May-2025" 
        endDate="31-Jul-2025" 
      />
      <CohortDetails 
        name="Python ML Jan 2025" 
        status="completed" 
        startDate="01-Jan-2025" 
        endDate="31-Mar-2025" 
      />
    </div>
  );
}
export default App;