const Card = ({ header, data = [], footer }) => (
  <div className="Card">
    {header && <header>{header}</header>}
    <main>
      {data.map(({ term, description }) => (
        <dl key={term}>
          <dt>{term}</dt>
          <dd>{description}</dd>
        </dl>
      ))}
    </main>
    {footer && <footer>{footer}</footer>}
  </div>
);

export default Card;
