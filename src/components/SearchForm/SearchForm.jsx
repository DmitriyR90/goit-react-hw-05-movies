import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button } from './SearchForm.styled';

export const SearchForm = () => {
  // eslint-disable-next-line
  const [_, setSearchParams] = useSearchParams('');
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = event => {
    setSearchQuery(event.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input type="text" name="query" value={searchQuery} onChange={onChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
};
