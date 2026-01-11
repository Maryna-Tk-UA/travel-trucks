import css from "./Catalog.module.css";

type Props = {
  children: React.ReactNode;
  filter: React.ReactNode;
};

const CatalogLayout = ({ children, filter }: Props) => {
  return (
    <div className={css.catalog}>
      <aside className={css.aside}>{filter}</aside>
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default CatalogLayout;
