import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; // Renamed the import to avoid conflict
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button/Button';
function CustomCheckbox() {
  const navigate = useNavigate()
  const goHome = () =>{
    navigate('/')
  }
  const [parent1Checked, setParent1Checked] = useState(true);
  const [parent2Checked, setParent2Checked] = useState(false);
  const [childChecked, setChildChecked] = useState([true, false, true, false]);

  const handleParent1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParent1Checked(event.target.checked);
  };

  const handleParent2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParent2Checked(event.target.checked);
  };

  const handleChildChange = (index:number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChildChecked = [...childChecked];
    newChildChecked[index] = event.target.checked;
    setChildChecked(newChildChecked);
  };

  const children1 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={childChecked[0]} onChange={handleChildChange(0)} />}
      />
      <FormControlLabel
        label="Customer_Sucess"
        control={<Checkbox checked={childChecked[1]} onChange={handleChildChange(1)} />}
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Graphic Design"
        control={<Checkbox checked={childChecked[2]} onChange={handleChildChange(2)} />}
      />
      <FormControlLabel
        label="Product Design"
        control={<Checkbox checked={childChecked[3]} onChange={handleChildChange(3)} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Customer Service"
        control={
          <Checkbox
            checked={parent1Checked && childChecked.slice(0, 2).every(Boolean)}
            indeterminate={!childChecked.slice(0, 2).every(Boolean) && childChecked.slice(0, 2).some(Boolean)}
            onChange={handleParent1Change}
          />
        }
      />
      {children1}
      <FormControlLabel
        label="Design"
        control={
          <Checkbox
            checked={parent2Checked && childChecked.slice(2, 4).every(Boolean)}
            indeterminate={!childChecked.slice(2, 4).every(Boolean) && childChecked.slice(2, 4).some(Boolean)}
            onChange={handleParent2Change}
          />
        }
      />
      {children2}

      <Button
        type="submit"
        className="submit-button"
        variant="contained"
        color="primary"
        onClick={goHome}
      >
        Home
      </Button>
    </div>
  );
}

export default CustomCheckbox;
