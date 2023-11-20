

function Header() {
    return(
        <header className="min-h-3/10 bg-sky-400">
            <nav className="flex sm:justify-center space-x-4">
            {[
                ['Home', '/'],
                ['Team', '/#'],
                ['Projects', '/#'],
                ['Reports', '/#'],
            ].map(([title, url]) => (
                <a href={url} className="px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
            ))}
            </nav>
        </header>
    );
}

export default Header