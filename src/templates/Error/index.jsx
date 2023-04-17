import { GridContent } from '../../components/GridContent';

export const Error = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>A página que você busca não foi encontrada. <a href="/">Clique aqui</a> para voltar.</p>'
    />
  );
};
