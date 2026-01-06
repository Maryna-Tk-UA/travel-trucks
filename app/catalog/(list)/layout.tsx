import css from "./Catalog.module.css";

type Props = {
  children: React.ReactNode;
  filter: React.ReactNode;
};

const CatalogLayout = ({ children, filter }: Props) => {
  return (
    <section className={css.catalog}>
      <aside>{filter}</aside>
      <div>{children}</div>
    </section>
  );
};

export default CatalogLayout;
