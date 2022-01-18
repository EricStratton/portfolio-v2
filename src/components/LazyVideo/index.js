import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import {
  LazyVideoWrapper,
  Video
} from './LazyVideo';

const LazyVideo = ({ video }) => {
  const [inView, setInView] = useState(false);

  return (
    <InView
      onChange={setInView}
      threshold={0}
      triggerOnce>
      <LazyVideoWrapper>
        { inView && <Video autoPlay loop muted  type='video/mp4' src={video} /> }
      </LazyVideoWrapper>
    </InView>
  )
}

export default LazyVideo;

