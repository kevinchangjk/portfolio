import { useAppContext } from "@/context/state";
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
  const { router, enroute } = useAppContext();

  function onClickHandler() {
    // check if a transition is even necessary
    if (router?.pathname === href) {
      return;
    }

    enroute(href, { scroll: true });
  }

  return (
    <Button
      variant="unstyled"
      padding="0rem"
      height="min"
      key={`route-${href}`}
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
