import HomePage from './pages/HomePage';
import VideoResultsPage from './pages/VideoResultsPage';
import WatchResultsPage from './pages/WatchResultsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import YoutubeChannel from './pages/YoutubeChannel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/results",
    element: <VideoResultsPage />,
  },
  {
    path: "/watch/:id", 
    element: <WatchResultsPage />,
  },
  {
    path: "/:channelId", 
    element: <YoutubeChannel />,
  }
]);
function App() {
  return <RouterProvider router={router} />
}

export default App;
