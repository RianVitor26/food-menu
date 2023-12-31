import { FaGithub, FaDiscord, FaLinkedin } from  "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"

export const Footer = () => {

  const as = {
    contacts: {
      linkedin: 'https://www.aedin.com/in/rian-vitor-dos-santos-de-almeida-a036aa202/',
      discord: 'https://discord.com/channels/@me',
      gmail: 'mailto:rianvitorlhe@gmail.com',
    },
    tech: {
      react: 'https://pt-br.legacy.reactjs.org/',
      tailwind: 'https://tailwindcss.com/',
      springboot: 'https://docs.spring.io/spring-boot/docs/current/reference/html/',
      mysql: 'https://www.mysql.com/'
    },
    integrations: {
      vercel: 'https://vercel.com/',
      github: 'https://github.com/RianVitor26',
      railway: 'https://railway.app/'
    },
    project: {
      srcCode: 'https://github.com/RianVitor26/react-menu',
      license: 'https://github.com/RianVitor26/react-menu/blob/main/LICENSE',
      contrib: 'https://github.com/RianVitor26/react-menu/graphs/contributors'
    },
    github: 'https://github.com/RianVitor26',
    site: 'https://rianvitor26dos-santos-de-almeida.vercel.app/'
  }

  return (
    <footer className="bg-black w-full">
        <div className="max-w-4xl w-11/12 px-5 pt-10 mx-auto mt-52">
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-5 mb-20 sm:grid-cols-3 sm:grid-rows-2  md:grid-cols-4 md:grid-rows-1">
            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-orange-600">Contatos</span>
                <a target="_blank" href={as.contacts.linkedin} className="text-gray-400">Linkedin</a>
                <a target="_blank" href={as.contacts.discord} className="text-gray-400 flex flex-col"><FaDiscord/>RianVitor26<span>#0458</span></a>
                <a target="_blank" href={as.contacts.gmail} className="text-gray-400">Gmail</a>
            </div>

            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-orange-600">Projeto</span>
                <a target="_blank" href={as.project.srcCode} className="text-gray-400">Código fonte</a>
                <a target="_blank" href={as.project.license} className="text-gray-400">Lincença</a>
                <a target="_blank" href={as.project.contrib} className="text-gray-400">Contribuidores</a>
            </div>

            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-orange-600">Tecnologias</span>
                <a target="_blank" href={as.tech.react} className="text-gray-400">React.js</a>
                <a target="_blank" href={as.tech.tailwind} className="text-gray-400">TailwindCSS</a>
                <a target="_blank" href={as.tech.springboot} className="text-gray-400">Springboot</a>
                <a target="_blank" href={as.tech.mysql} className="text-gray-400">MySQL</a>
            </div>

            <div className="flex flex-col gap-3 h-fit divide-x">
                <span className="pb-4 font-bold text-orange-600">Integrações</span>
                <a target="_blank" href={as.integrations.vercel} className="text-gray-400">Vercel</a>
                <a target="_blank" href={as.integrations.github} className="text-gray-400">Github</a>
                <a target="_blank" href={as.integrations.railway} className="text-gray-400">Railway</a>
            </div>
        </div>
        <div className="w-full mb-16">
              <h4 className="mb-3 font-bold text-orange-600">Inscreva-se na nossa newslatter</h4>
              <h5 className="mb-6 font-semibold text-gray-500">Receba informações exclusivas sobre promoções de comidas e bebidas que agradam o seu paladar!</h5>
              <input type="text" placeholder="Insira seu email" className="w-full px-5 text-gray-50 py-2 bg-transparent border border-gray-400 mb-3 rounded-md  md:max-w-md"/>
              <button className="w-full text-center font-bold bg-orange-700 text-gray-200 px-5 py-2 rounded-md md:max-w-md">Inscrever-se</button>
        </div>
        <div className="w-full h-fit flex items-center justify-center gap-5 mb-5 md:justify-start">
            <a target="_blank" href={as.github} className="text-2xl text-gray-500"><FaGithub/></a>
            <a target="_blank" href={as.contacts.linkedin} className="text-2xl text-gray-500"><FaLinkedin/></a>
            <a target="_blank" href={as.contacts.gmail} className="text-2xl text-gray-500"><BiLogoGmail/></a>
            <a target="_blank" href={as.contacts.discord} className="text-2xl text-gray-500"><FaDiscord/></a>
        </div>
        <div className="w-full">
              <p className="text-gray-500 text-center py-5">2023 Cardápio UI, <a target="_blank" href={as.site} className="hover:text-orange-500">RianVitor26</a></p>
        </div>
    </div>
    </footer>
  )
}