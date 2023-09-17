import styles from './SearchField.module.scss';
import { useRouter } from 'next/router';

function SearchField() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchTerm = e.target.searchField.value;
    router.push(`/search?title=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.searchField}
        type="search"
        name="searchField"
        id="searchField"
        placeholder="Поиск..."
      />
    </form>
  );
}

export default SearchField;
