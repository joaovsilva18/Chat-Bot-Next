import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div class="flex flex-col h-screen">
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <a class="btn btn-ghost text-xl">StoneBot</a>
          </div>
          <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>


        <div class="flex flex-1">
          <ul class="menu bg-base-200 w-56 rounded-box">
            <li class="menu-title">Sessions</li>
            <li><a>E-mail do Forattini</a></li>
            <li><a>Ajuda com o plano de Saúde</a></li>
            <li><a>Sobre Equipamentos</a></li>
            <li><a>O que é PEB?</a></li>
            <li><a>Auxilio Home office</a></li>
            <li><a>Recibo de ferias</a></li>
            <li><a>BP do Forattini</a></li>
          </ul>
          <section class="flex-1 flex flex-col overflow-y-auto p-4">
            <div class="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
                </div>
              </div>
              <div className="chat-header">
                João Victor
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary">Qual é o e-mail do Forattini?</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
                </div>
              </div>
              <div className="chat-header">
                StoneBot
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-success">O endereço de e-mail do funcionário Forattini é filipe.forattini@stone.com.br.</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
                </div>
              </div>
              <div className="chat-header">
                João Victor
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary">Quem é o líder dele?</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
                </div>
              </div>
              <div className="chat-header">
                StoneBot
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-success">O líder do funcionário de sobrenome Forattini é Felipe Salvini Bourrus.</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
                </div>
              </div>
              <div className="chat-header">
                João Victor
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary">To com uma liderança que tirou 5 dias de férias e agora quer tirar mais 20 dias e depois mais 5. Ela pode fracionar as férias em 3 assim ou tem alguma regra pra isso?</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
                </div>
              </div>
              <div className="chat-header">
                StoneBot
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-success">Sim, um líder pode dividir suas férias em três períodos, sendo o primeiro de 5 dias, o segundo de 20 dias e o terceiro de mais 5 dias, conforme a legislação trabalhista vigente, desde que um dos períodos seja de no mínimo 14 dias corridos e os outros dois não sejam inferiores a 5 dias cada.</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
                </div>
              </div>
              <div className="chat-header">
                StoneBot
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-success">Confira mais informações aqui:<br />
                Cartilha Férias - Update 08.05.2023.pdf (páginas 3, 16) <br />
                Cartilha de Benefícios - Update 30.06.2023.pdf (páginas 26)</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>
            <div class="flex items-end p-4">
              <input type="text" placeholder="Digite uma mensagem" class="input input-bordered input-success w-full" />
            </div>
          </section>
        </div>
        <footer class="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - Forattime</p>
          </aside>
        </footer>
      </div>

      {/* <div className="flex h-screen">
        <div className="w-1/4 bg-base-100 p-4 border-r border-base-200">
          <ul className="menu menu-lg bg-base-200 w-56 rounded-box">
            <li><a>lg item 1</a></li>
            <li><a>lg item 2</a></li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="bg-base-100 p-4">
            <div className="flex items-center">
              <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
              <div className="flex-1">
                <a className="btn btn-ghost text-xl">StoneBot</a>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
                </div>
              </div>
              <div className="chat-header">
                João Victor
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary">Qual é o e-mail do Forattini?</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
                </div>
              </div>
              <div className="chat-header">
                StoneBot
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-success">O endereço de e-mail do funcionário Forattini é filipe.forattini@stone.com.br.</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
                </div>
              </div>
              <div className="chat-header">
                João Victor
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble chat-bubble-primary">Quem é o líder dele?</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
                </div>
              </div>
              <div className="chat-header">
                StoneBot
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-success">O líder do funcionário de sobrenome Forattini é Felipe Salvini Bourrus.</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>
          </div>
          <input type="text" placeholder="Digite uma mensagem" className="input input-bordered input-success w-full w-300 p-4" />
        </div>
      </div> */}

      {/* <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">StoneBot</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      </div>

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
          </div>
        </div>
        <div className="chat-header">
          João Victor
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">Qual é o e-mail do Forattini?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
          </div>
        </div>
        <div className="chat-header">
          StoneBot
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble chat-bubble-success">O endereço de e-mail do funcionário Forattini é filipe.forattini@stone.com.br.</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
          </div>
        </div>
        <div className="chat-header">
          João Victor
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">Quem é o líder dele?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
          </div>
        </div>
        <div className="chat-header">
          StoneBot
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble chat-bubble-success">O líder do funcionário de sobrenome Forattini é Felipe Salvini Bourrus.</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
     
      <input type="text" placeholder="Digite uma mensagem" className="input input-bordered input-success w-full w-300" /> */}

      {/* <footer className="footer p-10 bg-base-300 text-base-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer> */}
      {/* <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK72QVowkkYOCariXGWlhEMHyF0JcKgu4bFA&usqp=CAU" />
          </div>
        </div>
        <div className="chat-header">
          João Victor
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">To com uma liderança que tirou 5 dias de férias e agora quer tirar mais 20 dias e depois mais 5. Ela pode fracionar as férias em 3 assim ou tem alguma regra pra isso?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
          </div>
        </div>
        <div className="chat-header">
          StoneBot
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble chat-bubble-success">Sim, um líder pode dividir suas férias em três períodos, sendo o primeiro de 5 dias, o segundo de 20 dias e o terceiro de mais 5 dias, conforme a legislação trabalhista vigente, desde que um dos períodos seja de no mínimo 14 dias corridos e os outros dois não sejam inferiores a 5 dias cada.</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3HvfpK7PGUb5Upte6G6_T2xupkLff8GPn49aeteHDA&s" />
          </div>
        </div>
        <div className="chat-header">
          StoneBot
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble chat-bubble-success">Confira mais informações aqui:<br />
          Cartilha Férias - Update 08.05.2023.pdf (páginas 3, 16) <br />
          Cartilha de Benefícios - Update 30.06.2023.pdf (páginas 26)</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div> */}

    </main>
  );
}