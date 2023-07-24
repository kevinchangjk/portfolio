import { useAppContext } from "@/context/state";
import { PAGE_TRANSITION_DURATION } from "@/utils/constants";
import { Button } from "@chakra-ui/react";

export default function InternalLink({
  href,
  color,
  children,
  thickness,
}: {
  href: string;
  color: string;
  children: React.ReactNode;
  thickness: string;
}) {
  const { router, setIsMounted } = useAppContext();

  function onClickHandler() {
    // check if a transition is even necessary
    if (router?.pathname === href) {
      console.log("here");
      return;
    }

    // begin exit animation
    setIsMounted(false);

    // redirect after 3000ms
    setTimeout(async () => {
      await router?.push(href, href, { scroll: false });
      setIsMounted(true);
    }, PAGE_TRANSITION_DURATION);
  }

  return (
    <Button
      variant="unstyled"
      height="min"
      key={href}
      onClick={onClickHandler}
      display="inline-block"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: thickness,
        bottom: 0,
        left: 0,
        backgroundColor: color,
        transition: "transform 0.2s ease",
      }}
      _hover={{
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "center",
        },
      }}
    >
      {children}
    </Button>
  );
}
