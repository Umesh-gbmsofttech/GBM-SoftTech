import { Box, Typography, Button } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Section, Container, SectionHeader, TwoColumn } from "@components/ui/Section";
import { HoverCard, IconBadge, MutedText, Pill } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";
import { StatRow, StatCard, StatValue } from "@components/ui/Tags";
import { SchoolOutlined, BuildOutlined } from "@mui/icons-material";

const ProductCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2)
}));

const ProductImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 160,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`
}));

const FeatureList = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1)
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  color: theme.palette.text.secondary
}));

const TagRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1)
}));

const PriceCard = styled(HoverCard)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}));

const ColoredBadge = styled(IconBadge, {
  shouldForwardProp: (prop) => prop !== "tone"
})<{ tone: string }>(({ theme, tone }) => ({
  backgroundColor: tone,
  color: theme.palette.primary.contrastText
}));

export const ProductsPage = () => {
  const theme = useTheme();
  const primaryTone = theme.palette.primary.main;
  const successTone = theme.palette.success.main;

  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <SectionHeader>
            <Typography variant="h3">Our Products</Typography>
            <MutedText variant="body2">
              Innovative solutions designed to transform careers and simplify everyday life.
            </MutedText>
          </SectionHeader>
          <TwoColumn>
            <ProductCard>
              <ColoredBadge tone={primaryTone}>
                <SchoolOutlined />
              </ColoredBadge>
              <Typography variant="h5">Skillmate</Typography>
              <MutedText variant="body2">IT Training + 100% Placement Guarantee</MutedText>
              <ProductImage />
              <Typography variant="subtitle1">Features</Typography>
              <FeatureList>
                {[
                  "Industry-relevant curriculum",
                  "Expert mentorship",
                  "Hands-on projects",
                  "Career guidance"
                ].map((item) => (
                  <FeatureItem key={item}>• {item}</FeatureItem>
                ))}
              </FeatureList>
              <Typography variant="subtitle1">Training Programs</Typography>
              <TagRow>
                {["Full Stack Development", "Data Science", "Cloud Computing", "DevOps"].map(
                  (tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  )
                )}
              </TagRow>
              <Typography variant="subtitle1">Placement Stories</Typography>
              <HoverCard>
                <Typography variant="subtitle2">Arjun Sharma</Typography>
                <MutedText variant="body2">Placed at TCS - ?6.5 LPA</MutedText>
              </HoverCard>
              <Typography variant="subtitle1">Pricing Plans</Typography>
              <PriceCard>
                <Typography variant="body2">Basic Plan</Typography>
                <Typography variant="subtitle2">?25,000</Typography>
              </PriceCard>
              <PriceCard>
                <Typography variant="body2">Premium Plan</Typography>
                <Typography variant="subtitle2">?45,000</Typography>
              </PriceCard>
              <Typography variant="subtitle1">Success Metrics</Typography>
              <StatRow>
                {[
                  { label: "Students Placed", value: "500+" },
                  { label: "Success Rate", value: "95%" },
                  { label: "Avg Package", value: "?8.5L" }
                ].map((stat) => (
                  <StatCard key={stat.label}>
                    <StatValue variant="h6">{stat.value}</StatValue>
                    <Typography variant="caption" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </StatCard>
                ))}
              </StatRow>
              <Button variant="contained">Join Now</Button>
            </ProductCard>

            <ProductCard>
              <ColoredBadge tone={successTone}>
                <BuildOutlined />
              </ColoredBadge>
              <Typography variant="h5">MyGarage</Typography>
              <MutedText variant="body2">Vehicle Owner & Mechanic Connection App</MutedText>
              <ProductImage />
              <Typography variant="subtitle1">Features</Typography>
              <FeatureList>
                {[
                  "Real-time mechanic tracking",
                  "Transparent pricing",
                  "Service history",
                  "Emergency assistance"
                ].map((item) => (
                  <FeatureItem key={item}>• {item}</FeatureItem>
                ))}
              </FeatureList>
              <Typography variant="subtitle1">How it Works</Typography>
              <FeatureList>
                {["Request service", "Find nearby mechanics", "Get service & pay"].map((item) => (
                  <FeatureItem key={item}>• {item}</FeatureItem>
                ))}
              </FeatureList>
              <Typography variant="subtitle1">User Benefits</Typography>
              <TagRow>
                {["Quick Service", "Trusted Mechanics", "Fair Pricing", "Location Based"].map(
                  (tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  )
                )}
              </TagRow>
              <Typography variant="subtitle1">Service Categories</Typography>
              <TagRow>
                {["General Repair", "Oil Change", "Tire Service", "Battery"].map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </TagRow>
              <Typography variant="subtitle1">App Statistics</Typography>
              <StatRow>
                {[
                  { label: "Active Users", value: "10k+" },
                  { label: "Mechanics", value: "500+" },
                  { label: "Avg Response", value: "15min" }
                ].map((stat) => (
                  <StatCard key={stat.label}>
                    <StatValue variant="h6">{stat.value}</StatValue>
                    <Typography variant="caption" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </StatCard>
                ))}
              </StatRow>
              <Button variant="contained">Download App</Button>
            </ProductCard>
          </TwoColumn>
        </Container>
      </Section>
    </PageTransition>
  );
};
