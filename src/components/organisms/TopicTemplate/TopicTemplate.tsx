import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import styles from './TopicTemplate.module.scss';

type TopicTemplateProps = {
  topic: string,
  description: string,
  image: string,
  alt: string
}

const TopicTemplate: React.FC<TopicTemplateProps> = (props) => {
  return (
    <Box className={styles.topicTemplate}>
      <Box className={styles.textSection}>
        <Typography variant="h5" className={styles.title}>{props.topic}</Typography>
        <Typography className={styles.description}>
          {props.description}
        </Typography>
      </Box>
      <Box className={styles.imageSection}>
        <Card className={styles.itemCard}>
          <CardMedia
            component="img"
            image={props.image}
            alt={props.alt}
            className={styles.image}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default TopicTemplate;