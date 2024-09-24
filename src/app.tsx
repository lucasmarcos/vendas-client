import { NovoCliente } from "./cliente/novo.js";

export const app = () => {
  return (
    <div className="flex flex-col">
      <div>
        <ul>
          <li>
            <a href="#cliente">cliente</a>
          </li>
        </ul>
      </div>
      <div>
        <NovoCliente />
      </div>
    </div>
  );
};
