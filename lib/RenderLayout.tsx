import { components } from "../app/components/sections/LayoutList";

interface LayoutItem {
  __component: string;
}
interface RenderLayoutProps {
  layout: LayoutItem[];
}

const normalizeComponentName = (componentName: string) => {
  const removeComponentsFromName = componentName.replace("components.", "");
  const name = removeComponentsFromName.includes("-")
    ? removeComponentsFromName.replace("-", "")
    : removeComponentsFromName;
  return name;
};

export const RenderLayout: React.FC<RenderLayoutProps> = ({ layout }: any) => {
  return (
    <div>
      {layout?.map((block: any, i: number) => {
        const componentName = normalizeComponentName(block.__component);
        const Component = components[componentName] as React.ComponentType<{
          data: any;
        }>;
        if (Component) {
          return <Component data={block} key={i} />;
        } else {
          console.log("didn't render");
          return null;
        }
      })}
    </div>
  );
};
