import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Section, Container } from "@components/ui/Section";
import { HoverCard, MutedText, Pill } from "@components/ui/StyledCard";
import { PageTransition, pageVariants } from "@components/animations/PageTransition";

const BlogGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}));

const CardList = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3)
}));

const BlogImage = styled(Box)(({ theme }) => ({
  height: 200,
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(120deg, ${theme.palette.primary.main}33, ${
    theme.palette.secondary.main
  }33)`
}));

const SidebarCard = styled(HoverCard)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2)
}));

const TagRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1)
}));

export const BlogPage = () => {
  return (
    <PageTransition variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      <Section>
        <Container>
          <BlogGrid>
            <CardList>
              {["Tech", "Startups", "Mobile Apps", "Digital Marketing", "Tech"].map((tag, index) => (
                <HoverCard key={`${tag}-${index}`}>
                  <BlogImage />
                  <Pill>{tag}</Pill>
                  <Typography variant="h6">The Future of AI in Software Development</Typography>
                  <MutedText variant="body2">
                    Exploring how AI is revolutionizing the way we build and deploy applications.
                  </MutedText>
                  <Button size="small">Read More</Button>
                </HoverCard>
              ))}
            </CardList>
            <CardList>
              <SidebarCard>
                <Typography variant="subtitle1">Search</Typography>
                <TextField placeholder="Search articles..." fullWidth />
              </SidebarCard>
              <SidebarCard>
                <Typography variant="subtitle1">Recent Posts</Typography>
                {[
                  "AI in Healthcare Solutions",
                  "Startup Funding Strategies",
                  "Mobile App UX Design"
                ].map((post) => (
                  <React.Fragment key={post}>
                    <Typography variant="body2">{post}</Typography>
                    <MutedText variant="caption">June 12, 2024</MutedText>
                  </React.Fragment>
                ))}
              </SidebarCard>
              <SidebarCard>
                <Typography variant="subtitle1">Tags</Typography>
                <TagRow>
                  {["Technology", "Startups", "Marketing", "AI", "Cloud", "Mobile"].map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </TagRow>
              </SidebarCard>
              <SidebarCard>
                <Typography variant="subtitle1">Subscribe to Newsletter</Typography>
                <TextField placeholder="Enter your email" fullWidth />
                <Button variant="contained">Subscribe Now</Button>
              </SidebarCard>
            </CardList>
          </BlogGrid>
        </Container>
      </Section>
    </PageTransition>
  );
};
