interface CategoriesProps {
  params: {
    categories: string[];
    searchParams: Record<string, string | string[] | undefined>; // OR { [key: string]: string | string[] | undefined }
  };
}

export default function Categories(props: CategoriesProps) {
  const { categories } = props.params;
  return <h1>Dynamic categories: {categories}</h1>;
}
