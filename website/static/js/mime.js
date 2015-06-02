//This file is a shim to allow for additional mimetypes
//this list includes all file extensions rendered as text by MFR
var $ = require('jquery');
var mime = require('mime-types');

$.extend(mime.types, {
    '6pm': 'text/plain',
    '6pl': 'text/plain',
    rd: 'text/plain',
    rout: 'text/plain',
    '1': 'text/plain',
    '2': 'text/plain',
    '3': 'text/plain',
    '4': 'text/plain',
    '5': 'text/plain',
    '6': 'text/plain',
    '7': 'text/plain',
    abap: 'text/plain',
    ada: 'text/plain',
    adb: 'text/plain',
    ads: 'text/plain',
    agda: 'text/plain',
    ahk: 'text/plain',
    ahkl: 'text/plain',
    aj: 'text/plain',
    als: 'text/plain',
    apl: 'text/plain',
    applescript: 'text/plain',
    arexx: 'text/plain',
    as: 'text/plain',
    asax: 'text/plain',
    ascx: 'text/plain',
    ashx: 'text/plain',
    asm: 'text/plain',
    asmx: 'text/plain',
    aspx: 'text/plain',
    asy: 'text/plain',
    at: 'text/plain',
    au3: 'text/plain',
    aux: 'text/plain',
    awk: 'text/plain',
    axd: 'text/plain',
    b: 'text/plain',
    bas: 'text/plain',
    bash: 'text/plain',
    bat: 'text/plain',
    bb: 'text/plain',
    befunge: 'text/plain',
    bf: 'text/plain',
    bmx: 'text/plain',
    boo: 'text/plain',
    bro: 'text/plain',
    bug: 'text/plain',
    c: 'text/plain',
    'c++': 'text/plain',
    'c++-objdump': 'text/plain',
    'c-objdump': 'text/plain',
    cbl: 'text/plain',
    cc: 'text/plain',
    cdf: 'text/plain',
    ceylon: 'text/plain',
    cf: 'text/plain',
    cfc: 'text/plain',
    cfg: 'text/plain',
    cfm: 'text/plain',
    cfml: 'text/plain',
    chai: 'text/plain',
    chpl: 'text/plain',
    cirru: 'text/plain',
    cl: 'text/plain',
    clay: 'text/plain',
    clj: 'text/plain',
    cljs: 'text/plain',
    cls: 'text/plain',
    cmake: 'text/plain',
    cmd: 'text/plain',
    cob: 'text/plain',
    coffee: 'text/plain',
    cp: 'text/plain',
    cpp: 'text/plain',
    'cpp-objdump': 'text/plain',
    cpy: 'text/plain',
    croc: 'text/plain',
    cry: 'text/plain',
    cs: 'text/plain',
    csh: 'text/plain',
    css: 'text/plain',
    'css.in': 'text/plain',
    cu: 'text/plain',
    cuh: 'text/plain',
    cw: 'text/plain',
    cxx: 'text/plain',
    'cxx-objdump': 'text/plain',
    cyp: 'text/plain',
    cypher: 'text/plain',
    d: 'text/plain',
    'd-objdump': 'text/plain',
    darcspatch: 'text/plain',
    dart: 'text/plain',
    decls: 'text/plain',
    def: 'text/plain',
    dg: 'text/plain',
    di: 'text/plain',
    diff: 'text/plain',
    docker: 'text/plain',
    dpatch: 'text/plain',
    dtd: 'text/plain',
    duby: 'text/plain',
    duel: 'text/plain',
    dyl: 'text/plain',
    dylan: 'text/plain',
    'dylan-console': 'text/plain',
    e: 'text/plain',
    ebnf: 'text/plain',
    ebuild: 'text/plain',
    ec: 'text/plain',
    ecl: 'text/plain',
    eclass: 'text/plain',
    eh: 'text/plain',
    el: 'text/plain',
    eps: 'text/plain',
    erl: 'text/plain',
    'erl-sh': 'text/plain',
    es: 'text/plain',
    escript: 'text/plain',
    evoque: 'text/plain',
    ex: 'text/plain',
    exs: 'text/plain',
    f: 'text/plain',
    f90: 'text/plain',
    factor: 'text/plain',
    fan: 'text/plain',
    fancypack: 'text/plain',
    feature: 'text/plain',
    fhtml: 'text/plain',
    flx: 'text/plain',
    flxh: 'text/plain',
    frag: 'text/plain',
    fs: 'text/plain',
    fsi: 'text/plain',
    fun: 'text/plain',
    fy: 'text/plain',
    g: 'text/plain',
    gap: 'text/plain',
    gd: 'text/plain',
    gdc: 'text/plain',
    gemspec: 'text/plain',
    geo: 'text/plain',
    gi: 'text/plain',
    go: 'text/plain',
    golo: 'text/plain',
    groovy: 'text/plain',
    gs: 'text/plain',
    gsp: 'text/plain',
    gst: 'text/plain',
    gsx: 'text/plain',
    h: 'text/plain',
    'h++': 'text/plain',
    haml: 'text/plain',
    handlebars: 'text/plain',
    hbs: 'text/plain',
    hdp: 'text/plain',
    hh: 'text/plain',
    hpp: 'text/plain',
    hrl: 'text/plain',
    hs: 'text/plain',
    htm: 'text/plain',
    html: 'text/plain',
    hx: 'text/plain',
    hxml: 'text/plain',
    hxsl: 'text/plain',
    hxx: 'text/plain',
    hy: 'text/plain',
    hyb: 'text/plain',
    i: 'text/plain',
    i6t: 'text/plain',
    i7x: 'text/plain',
    idc: 'text/plain',
    idr: 'text/plain',
    ik: 'text/plain',
    inc: 'text/plain',
    inf: 'text/plain',
    ini: 'text/plain',
    intr: 'text/plain',
    io: 'text/plain',
    ipf: 'text/plain',
    j: 'text/plain',
    jade: 'text/plain',
    jag: 'text/plain',
    java: 'text/plain',
    jbst: 'text/plain',
    jl: 'text/plain',
    js: 'text/plain',
    'js.in': 'text/plain',
    json: 'text/plain',
    jsonld: 'text/plain',
    jsp: 'text/plain',
    jsx: 'text/plain',
    kal: 'text/plain',
    kid: 'text/plain',
    kk: 'text/plain',
    kki: 'text/plain',
    ksh: 'text/plain',
    kt: 'text/plain',
    lagda: 'text/plain',
    lasso: 'text/plain',
    'lasso[89]': 'text/plain',
    lcry: 'text/plain',
    lean: 'text/plain',
    lgt: 'text/plain',
    lhs: 'text/plain',
    lid: 'text/plain',
    lidr: 'text/plain',
    liquid: 'text/plain',
    lisp: 'text/plain',
    ll: 'text/plain',
    log: 'text/plain',
    logtalk: 'text/plain',
    ls: 'text/plain',
    lsl: 'text/plain',
    lsp: 'text/plain',
    lua: 'text/plain',
    m: 'text/plain',
    ma: 'text/plain',
    mak: 'text/plain',
    man: 'text/plain',
    mao: 'text/plain',
    maql: 'text/plain',
    mask: 'text/plain',
    mc: 'text/plain',
    mhtml: 'text/plain',
    mi: 'text/plain',
    mk: 'text/plain',
    ml: 'text/plain',
    mli: 'text/plain',
    mll: 'text/plain',
    mly: 'text/plain',
    mm: 'text/plain',
    mo: 'text/plain',
    mod: 'text/plain',
    monkey: 'text/plain',
    moo: 'text/plain',
    moon: 'text/plain',
    mq4: 'text/plain',
    mq5: 'text/plain',
    mqh: 'text/plain',
    msc: 'text/plain',
    mu: 'text/plain',
    mxml: 'text/plain',
    myt: 'text/plain',
    n: 'text/plain',
    nb: 'text/plain',
    nbp: 'text/plain',
    nc: 'text/plain',
    ni: 'text/plain',
    nim: 'text/plain',
    nimrod: 'text/plain',
    nit: 'text/plain',
    nix: 'text/plain',
    nl: 'text/plain',
    nqp: 'text/plain',
    ns2: 'text/plain',
    nsh: 'text/plain',
    nsi: 'text/plain',
    objdump: 'text/plain',
    'objdump-intel': 'text/plain',
    ooc: 'text/plain',
    opa: 'text/plain',
    p: 'text/plain',
    p6: 'text/plain',
    p6l: 'text/plain',
    p6m: 'text/plain',
    pan: 'text/plain',
    pas: 'text/plain',
    patch: 'text/plain',
    php: 'text/plain',
    'php[345]': 'text/plain',
    phtml: 'text/plain',
    pig: 'text/plain',
    pike: 'text/plain',
    pl: 'text/plain',
    pl6: 'text/plain',
    plot: 'text/plain',
    plt: 'text/plain',
    pm: 'text/plain',
    pm6: 'text/plain',
    pmod: 'text/plain',
    po: 'text/plain',
    pot: 'text/plain',
    pov: 'text/plain',
    pp: 'text/plain',
    prg: 'text/plain',
    pro: 'text/plain',
    prolog: 'text/plain',
    properties: 'text/plain',
    proto: 'text/plain',
    ps: 'text/plain',
    ps1: 'text/plain',
    psm1: 'text/plain',
    pwn: 'text/plain',
    pxd: 'text/plain',
    pxi: 'text/plain',
    py: 'text/plain',
    py3tb: 'text/plain',
    pypylog: 'text/plain',
    pytb: 'text/plain',
    pyw: 'text/plain',
    pyx: 'text/plain',
    qml: 'text/plain',
    r: 'text/plain',
    r3: 'text/plain',
    rake: 'text/plain',
    rb: 'text/plain',
    rbw: 'text/plain',
    rbx: 'text/plain',
    reb: 'text/plain',
    red: 'text/plain',
    reds: 'text/plain',
    reg: 'text/plain',
    rest: 'text/plain',
    rex: 'text/plain',
    rexx: 'text/plain',
    rhtml: 'text/plain',
    rkt: 'text/plain',
    rktd: 'text/plain',
    rktl: 'text/plain',
    rl: 'text/plain',
    robot: 'text/plain',
    rpf: 'text/plain',
    rq: 'text/plain',
    rql: 'text/plain',
    rs: 'text/plain',
    rst: 'text/plain',
    rsl: 'text/plain',
    rss: 'text/plain',
    rvt: 'text/plain',
    rx: 'text/plain',
    s: 'text/plain',
    sage: 'text/plain',
    sass: 'text/plain',
    sc: 'text/plain',
    scala: 'text/plain',
    scaml: 'text/plain',
    sce: 'text/plain',
    sci: 'text/plain',
    scm: 'text/plain',
    scss: 'text/plain',
    sh: 'text/plain',
    'sh-session': 'text/plain',
    'shell-session': 'text/plain',
    sig: 'text/plain',
    slim: 'text/plain',
    sls: 'text/plain',
    smali: 'text/plain',
    sml: 'text/plain',
    snobol: 'text/plain',
    sp: 'text/plain',
    sparql: 'text/plain',
    spec: 'text/plain',
    spt: 'text/plain',
    sql: 'text/plain',
    'sqlite3-console': 'text/plain',
    ss: 'text/plain',
    ssp: 'text/plain',
    st: 'text/plain',
    stan: 'text/plain',
    sv: 'text/plain',
    svh: 'text/plain',
    swg: 'text/plain',
    swift: 'text/plain',
    t: 'text/plain',
    tac: 'text/plain',
    tcl: 'text/plain',
    tcsh: 'text/plain',
    tea: 'text/plain',
    tex: 'text/plain',
    thy: 'text/plain',
    tmpl: 'text/plain',
    toc: 'text/plain',
    todotxt: 'text/plain',
    tpl: 'text/plain',
    treetop: 'text/plain',
    ts: 'text/plain',
    tst: 'text/plain',
    tt: 'text/plain',
    twig: 'text/plain',
    txt: 'text/plain',
    md: 'text/plain',
    rmd: 'text/plain',
    u: 'text/plain',
    v: 'text/plain',
    vala: 'text/plain',
    vapi: 'text/plain',
    vark: 'text/plain',
    vb: 'text/plain',
    vert: 'text/plain',
    vhd: 'text/plain',
    vhdl: 'text/plain',
    vim: 'text/plain',
    vm: 'text/plain',
    weechatlog: 'text/plain',
    wlua: 'text/plain',
    wsdl: 'text/plain',
    wsf: 'text/plain',
    x: 'text/plain',
    xhtml: 'text/plain',
    xi: 'text/plain',
    xm: 'text/plain',
    xmi: 'text/plain',
    xml: 'text/plain',
    xpl: 'text/plain',
    xq: 'text/plain',
    xql: 'text/plain',
    xqm: 'text/plain',
    xquery: 'text/plain',
    xqy: 'text/plain',
    xsd: 'text/plain',
    xsl: 'text/plain',
    xslt: 'text/plain',
    xtend: 'text/plain',
    'xul.in': 'text/plain',
    yaml: 'text/plain',
    yml: 'text/plain',
    zep: 'text/plain',
    renviron: 'text/plain',
    rhistory: 'text/plain',
    rprofile: 'text/plain',
    bashrc: 'text/plain',
    exrc: 'text/plain',
    gvimrc: 'text/plain',
    htaccess: 'text/plain',
    vimrc: 'text/plain'
});

module.exports = mime;
