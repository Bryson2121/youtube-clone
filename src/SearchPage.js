import React from "react";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9K0UmtgpGcJ4avcapTvXbAWOFB3vYAAHHA&usqp=CAU"
        channel="Tech Lead"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can find awesome Programming lesson on here! This is a demo you a React Project."
      />

      <hr />
      <VideoRow
        image="https://m.economictimes.com/thumb/msid-70533919,width-1200,height-900,resizemode-4,imgsize-515312/istock-458598891final.jpg"
        channel="Bryson Sullivan"
        subs="65k"
        timestamp="39 seconds ago"
        description="Training on web development and using the latest technologies! This is a demo you a React Project."
      />
      <VideoRow
        image="https://m.economictimes.com/thumb/msid-70533919,width-1200,height-900,resizemode-4,imgsize-515312/istock-458598891final.jpg"
        channel="Youtube"
        subs="459k"
        timestamp="45 seconds ago"
        description="Training on web development and using the latest technologies! This is a demo you a React Project."
      />
      <VideoRow
        image="data:image/jpeg;base64,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"
        channel="Web development"
        subs="639k"
        timestamp="59 seconds ago"
        description="Training on web development and using the latest technologies! This is a demo you a React Project."
      />
      <VideoRow
        image="https://m.economictimes.com/thumb/msid-70533919,width-1200,height-900,resizemode-4,imgsize-515312/istock-458598891final.jpg"
        channel="Coding Hobby"
        subs="159k"
        timestamp="59 seconds ago"
        description="Training on web development and using the latest technologies! This is a demo you a React Project."
      />
      <VideoRow
        image="https://m.economictimes.com/thumb/msid-70533919,width-1200,height-900,resizemode-4,imgsize-515312/istock-458598891final.jpg"
        channel="React & Redux"
        subs="259k"
        timestamp="9 seconds ago"
        description="Training on web development and using the latest technologies! This is a demo you a React Project."
      />
      <VideoRow
        image="https://m.economictimes.com/thumb/msid-70533919,width-1200,height-900,resizemode-4,imgsize-515312/istock-458598891final.jpg"
        channel="Tech Lead"
        subs="859k"
        timestamp="2 seconds ago"
        description="Training on web development and using the latest technologies! This is a demo you a React Project."
      />
    </div>
  );
}

export default SearchPage;
