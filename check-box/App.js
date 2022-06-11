import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

const App = () => {
  return (
    <>
      <div>
        <h1>basic Check box</h1>
        <Checkbox color='success' defaultChecked />
        <Checkbox color='secondary' />
        <Checkbox color='success' disabled />
        <Checkbox color='error' disabled checked />
        <Checkbox color='error' defaultChecked indeterminate />
      </div>
      <div>
        <h1>check box with form control lebel</h1>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel control={<Checkbox color='success'  />} label="secondary" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="kolkata" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Chennai" />
      </div>
      <div>
        <h1>Icon</h1>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='error' />
        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
        <Checkbox icon={<AddReactionOutlinedIcon />} checkedIcon={<AddReactionIcon /> } color='warning'/>
      </div>
    </>
  )
}

export default App