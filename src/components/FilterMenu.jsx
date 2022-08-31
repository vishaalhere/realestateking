import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const FilterMenu = ({
  applyFilters,
  clearFilters,
  userId,
  setuserId,
  title,
  setTitle,
  id,
  setId,
  completed,
  setCompleted,
}) => {
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col m-6">
      <div className="flex m-5 justify-around">
        <div className="">
          <FormControl className="w-60  p-5 mx-4 rounded-lg">
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userId}
              label="Property Type"
              onChange={(e) => setuserId(e.target.value)}
            >
              {userIds.map((userId) => {
                return (
                  <MenuItem key={userId} value={userId}>
                    {userId}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="">
          <FormControl className="w-60 mx-4">
            <InputLabel htmlFor="component-outlined">Area/Sector</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={id}
              onChange={(e) => setId(e.target.value)}
              label="Area/Sector"
            />
          </FormControl>
        </div>
        <div className="">
          <FormControl className="w-60 mx-4">
            <InputLabel htmlFor="component-outlined">Description</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Description"
            />
          </FormControl>
        </div>
        <div className="">
          <FormControl className="w-60 mx-4">
            <InputLabel id="demo-simple-select-label">Ready to Move</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={completed}
              label="Ready to Move"
              onChange={(e) => setCompleted(e.target.value)}
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mx-2">
          <Button variant="contained" onClick={applyFilters}>
            SEARCH
          </Button>
        </div>
        <div className="mx-2">
          <Button variant="contained" onClick={clearFilters}>
            CLEAR FILTERS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
