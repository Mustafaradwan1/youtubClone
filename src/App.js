import React from 'react';
import { BrowserRouter,Routes,Route,HashRouter  } from 'react-router-dom';

import {ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed,PlaylistDetail } from "./Component"
const App = () => {
  return <>
    <HashRouter>
      <div className='bg-black'>
        <div>
          <Navbar/>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/playlist/:id' element={<PlaylistDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
    </>
};
export default App;
