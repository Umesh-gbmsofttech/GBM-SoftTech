import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HoverCard } from "@components/ui/StyledCard";
import { CheckCircleOutline } from "@mui/icons-material";

const CompareGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

const List = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2)
}));

const Bullet = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1.2),
  color: theme.palette.text.secondary
}));

interface CompareProps {
  title: string;
  items: string[];
  accentColor: string;
}

export const CompareCard = ({ title, items, accentColor }: CompareProps) => (
  <HoverCard sx={{ borderTop: `4px solid ${accentColor}` }}>
    <Typography variant="h6" fontWeight="700">{title}</Typography>
    <List>
      {items.map((item) => (
        <Bullet key={item}>
          <CheckCircleOutline sx={{ fontSize: 18, color: accentColor, mt: 0.3 }} />
          <Typography variant="body2">{item}</Typography>
        </Bullet>
      ))}
    </List>
  </HoverCard>
);