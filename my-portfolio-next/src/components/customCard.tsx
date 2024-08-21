import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import javaIcon from "../assets/logos/java.png";
import phpIcon from "../assets/logos/php.png";
import flutterIcon from "../assets/logos/flutter.png";
import gitIcon from "../assets/logos/source_control.png";
import jsIcon from "../assets/logos/javascript.png";
import jqueryIcon from "../assets/logos/jquery.png";
import htmlIcon from "../assets/logos/html.png";
import cssIcon from "../assets/logos/css.png";

interface CustomCardInterface {
  imageLink: string;
  title: string;
}

export default function CustomCard() {
  const skillList = [
    {
      title: "Java",
      img: javaIcon,
    },
    {
      title: "PHP",
      img: phpIcon,
    },
    {
      title: "Flutter",
      img: flutterIcon,
    },
    {
      title: "Git Source Control",
      img: gitIcon,
    },
    {
      title: "JavaScript",
      img: jsIcon,
    },
    {
      title: "Jquery",
      img: jqueryIcon,
    },
    {
      title: "HTML",
      img: htmlIcon,
    },
    {
      title: "CSS",
      img: cssIcon,
    },
  ];

  const content = (
    <PopoverContent className="w-full">
      {(titleProps) => (
        <div className="px-1 py-2 w-full">
          <p className="text-small font-bold text-foreground" {...titleProps}>
            Dimensions
          </p>
          <div className="mt-2 flex flex-col gap-2 w-full">
            <Input
              defaultValue="100%"
              label="Width"
              size="sm"
              variant="bordered"
            />
            <Input
              defaultValue="300px"
              label="Max. width"
              size="sm"
              variant="bordered"
            />
            <Input
              defaultValue="24px"
              label="Height"
              size="sm"
              variant="bordered"
            />
            <Input
              defaultValue="30px"
              label="Max. height"
              size="sm"
              variant="bordered"
            />
          </div>
        </div>
      )}
    </PopoverContent>
  );

  return (
    <div className="grid justify-evenly grid-cols-2 gap-4 md:grid-cols-7">
      {skillList.map((item, index) => (
        <Popover
          key={index}
          showArrow
          offset={10}
          placement="bottom"
          backdrop={"opaque"}
        >
          <Badge content="5" color="default" shape="rectangle" size="lg">
            <PopoverTrigger>
              <Card className="py-4" isHoverable isPressable>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item.img}
                    width={270}
                  />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                  {/* <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small> */}
                  <h4 className="font-bold text-large">{item.title}</h4>
                </CardFooter>
              </Card>
            </PopoverTrigger>
          </Badge>
          {content}
        </Popover>
      ))}
    </div>
  );
}
