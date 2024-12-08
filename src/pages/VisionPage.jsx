import Header from "../components/Header";
import {
  PageContainer,
  Title,
  Subtitle,
  Paragraph,
  Highlight,
} from "../components/AboutPageContainer";

const VisionPage = () => {
  return (
    <>
      <Header />

      <PageContainer>
        <Title>Vision Page 🌈</Title>
        <Subtitle>
          Welcome to MealsAPI - Come Out and Savor the Flavor!
        </Subtitle>
        <Paragraph>
          At MealsAPI, food isn’t just nourishment—it’s an affair, a craving, a
          <Highlight> dirty little secret</Highlight>. Imagine a sausage that
          stretches your imagination, a sticky drizzle of honey that clings to
          your fingers, or an oozing chocolate lava cake that’s just begging you
          to dig in. We don’t just serve meals; we serve moments of ecstasy.
        </Paragraph>
        <Paragraph>
          We’re here to celebrate the flavors of the world and the gorgeous,
          diverse people who bring them to life. From the fiery spice of a curry
          that leaves you panting, to the buttery embrace of a croissant that
          melts in your mouth, every bite is a celebration of culture,
          queerness, and pleasure.
        </Paragraph>
        <Paragraph>
          MealsAPI is where drag queens brunch on bottomless mimosas, couples
          share sinful desserts, and chosen families gather for feasts that end
          in laughter—and maybe a little scandal. Tacos whisper sweet nothings,
          noodles cling to your fork like a lover, and yes, sausages are
          unapologetically thicc.
        </Paragraph>
        <Paragraph>
          We’re here to connect you to the world, one seductive bite at a time.
          Whether it’s spicy, sweet, or downright naughty, food is love, and
          we’re serving it hot.
        </Paragraph>
        <Paragraph>
          Come hungry, leave satisfied—and maybe a little breathless. 🌈🌈
        </Paragraph>
      </PageContainer>
    </>
  );
};

export default VisionPage;
