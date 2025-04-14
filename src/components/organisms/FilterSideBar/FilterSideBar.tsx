import React from "react";
import { Checkbox, FormControlLabel, FormGroup, Typography, Divider } from "@mui/material";
import styles from "./FilterSideBar.module.scss";

const FilterSidebar: React.FC = () => {
  return (
    <div className={styles.filter}>
      <Typography variant="h6" className={styles.filterCategory}>Kiểu</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Hiện đại" />
        <FormControlLabel control={<Checkbox />} label="Tối giản" />
        <FormControlLabel control={<Checkbox />} label="Đơn giản" />
        <FormControlLabel control={<Checkbox />} label="3D" />
      </FormGroup>
      <Divider />

      <Typography variant="h6" className={styles.filterCategory}>Lớp</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="10" />
        <FormControlLabel control={<Checkbox />} label="11" />
        <FormControlLabel control={<Checkbox />} label="12" />
      </FormGroup>

      <Typography variant="h6" className={styles.filterCategory}>Môn học</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Toán" />
        <FormControlLabel control={<Checkbox />} label="Lý" />
        <FormControlLabel control={<Checkbox />} label="Hóa" />
      </FormGroup>
    </div>
  );
};

export default FilterSidebar;
