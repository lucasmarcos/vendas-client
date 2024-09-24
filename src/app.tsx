import { NovoCliente } from "./cliente/novo.js";

export const app = () => {
  return (
    <div className="flex">
      <ul>
        <li>
          <a href="#cliente">cliente</a>
        </li>
      </ul>

      <div>
        <NovoCliente />
      </div>
    </div>
  );
};
