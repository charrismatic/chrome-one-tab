var bj = false;
var y1 = '1.18';
var L1 = 'https://www.one-tab.com';
var nK = false;
var mK = false;
var bX = "onmousemove";
var ij = "onmousedown";
var $j = "onmouseover";
var J = "onmouseup";
var v1 = "onmouseout";
var LK = "onclick";
var F1 = "ondblclick";
var JX = "onmouseleave";
var Aj = "mousemove";
var dX = "mousedown";
var r1 = "mouseover";
var m1 = "mouseup";
var GX = "mouseout";
var rK = "click";
var T = "dblclick";
var D1 = false;
var BK = 100006;

function uj()
{
  return document.body
};
var pX = 'aaa';
var $X = 'NEW_TRANSACTION';
W6S = false;
k6S = true;
var fX = function ()
{

    console.log('ga denied');
    return false;
  window['_gaq'] = window['_gaq'] || [];
  window['_gaq'].push(['_setAccount', 'UA-38573374-2']);
  window['_gaq'].push(['_trackPageview']);
  var SXS = document.createElement('script');
  SXS['type'] = 'text/javascript';
  SXS['async'] = true;
  SXS['src'] = 'https://ssl.google-analytics.com/ga.js';
  var uXS = document.getElementsByTagName('script')[0];
  uXS.parentNode.insertBefore(SXS, uXS)
};
fX();

function YK(wXS, PXS, gXS)
{
  if (!PXS) PXS = {};
  var cXS = {};
  cXS.type = wXS;
  cXS.Yn = pK.gW(PXS);
  window['chrome']['runtime']['sendMessage'](undefined, cXS, undefined, function (pp)
  {
    var Ip = {};
    if (pp && pp.Yn)
    {
      Ip = pK.parse(pp.Yn)
    }
    else
    {}
    if (gXS) gXS(Ip)
  })
};

function JK(vXS, NXS)
{
  window['chrome']['runtime']['onMessage']['addListener'](function (jp, mp, yp)
  {
    if (vXS == jp.OW)
    {
      var Cp = {};
      if (jp && jp.Yn) Cp = pK.parse(jp.Yn);
      NXS(Cp)
    }
  })
};

function MK(iXS)
{
  document.addEventListener('DOMContentLoaded', function ()
  {
    iXS()
  })
};
var TX = {};

function Sj(EXS)
{
  WK(function (ap)
  {
    TX = ap;
    EXS()
  })
};

function x1(AXS)
{
  return TX[AXS]
};

function d1()
{
  fj();
  Sj(function ()
  {
    yj()
  })
};
var PX = navigator['language'] || navigator['userLanguage'];

function A()
{
  var XXS = ['ar', 'he', 'fa', 'ps', 'ur'];
  var bXS = PX.split('-', 1)[0];
  return (XXS.indexOf(bXS) >= 0) ? 'rtl' : 'ltr'
};
var VX = A();

function zj()
{
  return VX != 'rtl'
};

function fj()
{
  document.getElementsByTagName('html')[0]['dir'] = VX
};

function iK(OXS, qXS)
{
  if (zj()) OXS.style.left = qXS;
  else OXS.style.right = qXS
};

function J1(dXS, sXS)
{
  if (zj()) dXS.style.right = sXS;
  else dXS.style.left = sXS
};

function b1(kXS, hXS)
{
  if (zj()) kXS.style.paddingLeft = hXS;
  else kXS.style.paddingRight = hXS
};

function Cj(GXS, MXS)
{
  if (zj()) GXS.style.paddingRight = MXS;
  else GXS.style.paddingLeft = MXS
};

function CX(_XS, WXS)
{
  if (zj()) _XS.style.marginLeft = WXS;
  else _XS.style.marginRight = WXS
};
var K1 = [
{
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '300'
},
{
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400'
},
{
  fontFamily: 'Open Sans',
  fontStyle: 'italic',
  fontWeight: '400'
},
{
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '600'
},
{
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '700'
}];

function Y1(Y1S, l1S)
{
  var n1S = 250;
  var Q1S = 0;
  var V1S = 50;
  var B1S = false;
  var JXS = 0;
  var e1S = false;
  setTimeout(function ()
  {
    e1S = true
  }, n1S);
  for (var r1S = 0, D1S = Y1S.length; r1S < D1S; ++r1S)
  {
    (function (op)
    {
      var Lp = document.createElement('span');
      Lp.innerHTML = 'giItT1WQy@!-/#';
      Lp.style.position = 'absolute';
      iK(Lp, '-10000px');
      Lp.style.top = '-10000px';
      Lp.style.fontSize = '300px';
      Lp.style.fontFamily = 'sans-serif';
      Lp.style.fontVariant = 'normal';
      Lp.style.fontStyle = op.fontStyle;
      Lp.style.fontWeight = op.fontWeight;
      Lp.style.letterSpacing = '0';
      document.body.appendChild(Lp);
      var zp = Lp.offsetWidth;
      Lp.style.fontFamily = op.fontFamily;
      var Up;

      function up()
      {
        if (Lp && Lp.offsetWidth != zp)
        {
          ++JXS;
          Lp.parentNode.removeChild(Lp);
          Lp = null
        }
        if ((JXS >= Y1S.length) || e1S)
        {
          if (Up)
          {
            clearInterval(Up)
          }
          if ((JXS == Y1S.length) || e1S)
          {
            if (!B1S)
            {
              B1S = true;
              l1S()
            }
            return true
          }
        }
      };
      if (!up())
      {
        Up = setInterval(up, V1S)
      }
    })(Y1S[r1S])
  }
};

function Vj(Z1S)
{
  var H1S = document.createElement('div');
  H1S.style.paddingTop = '40px';
  H1S.style.paddingBottom = '24px';
  b1(H1S, '268px');
  H1S.style.fontSize = '18px';
  H1S.style.color = '#777';
  H1S.style.fontWeight = '300';
  H1S.style.borderBottom = '1px dashed #ddd';
  H1S.style.marginBottom = '10px';
  H1S.appendChild(document.createTextNode(Z1S));
  return H1S
};

function dj()
{
  var T1S = document.createElement('img');
  T1S.style.height = 114 / 2 + 'px';
  T1S.style.width = 414 / 2 + 'px';
  T1S.style.position = 'absolute';
  T1S.style.top = '16px';
  iK(T1S, '22px');
  T1S.src = 'images/top-left-logo' + (zj() ? '' : '-rtl') + '.png';
  return T1S
};

function I1(I1S, F1S, f1S)
{
  var x1S = document.createElement('div');
  var R1S = document.createElement('div');
  b1(R1S, '30px');
  R1S.style.position = 'relative';
  R1S.style.color = '#777';
  var K1S = document.createElement('img');
  K1S.src = I1S ? 'images/twister-open.png' : ('images/twister-closed' + (zj() ? '' : '-rtl') + '.png');
  K1S.style.width = 48 / 2 + 'px';
  K1S.style.height = 50 / 2 + 'px';
  K1S.style.position = 'absolute';
  iK(K1S, '0px');
  K1S.style.top = '0px';
  R1S.appendChild(document.createTextNode(F1S));
  R1S.style.fontSize = '16px';
  R1S.style.cursor = 'pointer';
  x1S.appendChild(R1S);
  R1S.appendChild(K1S);
  var p1S = document.createElement('div');
  b1(p1S, '30px');
  p1S.style.paddingTop = '10px';
  p1S.appendChild(f1S);
  p1S.style.display = I1S ? 'block' : 'none';
  x1S.appendChild(p1S);
  R1S.onclick = function ()
  {
    I1S = !I1S;
    K1S.src = I1S ? 'images/twister-open.png' : ('images/twister-closed' + (zj() ? '' : '-rtl') + '.png');
    p1S.style.display = I1S ? 'block' : 'none'
  };
  return x1S
};

function Tj(j1S, a1S, C1S, m1S)
{
  var U1S = document.createElement('div');
  U1S.style.fontSize = a1S + 'px';
  U1S.className = 'clickable';
  var y1S = document.createElement('span');
  if (m1S)
  {
    var L1S = document.createElement('span');
    L1S.style.color = '#f00';
    L1S.appendChild(document.createTextNode(x1('newExclamation') + ' '));
    y1S.appendChild(L1S)
  }
  if (typeof j1S == 'string')
  {
    y1S.appendChild(document.createTextNode(j1S))
  }
  else
  {
    y1S.appendChild(j1S)
  }
  y1S.style.verticalAlign = 'middle';
  y1S.onclick = function ()
  {
    C1S(y1S)
  };
  U1S.appendChild(y1S);
  return U1S
};
var pK = {
  gW: function (z1S)
  {
    var S1S, c1S, P1S, u1S = '',
      o1S;
    switch (typeof z1S)
    {
    case 'object':
      ;
      if (z1S)
      {
        if (z1S instanceof Array)
        {
          for (c1S = 0; c1S < z1S.length; ++c1S)
          {
            o1S = this.gW(z1S[c1S]);
            if (u1S)
            {
              u1S += ','
            }
            u1S += o1S
          }
          return '[' + u1S + ']'
        }
        else if (typeof z1S.toString != 'undefined')
        {
          for (c1S in z1S)
          {
            o1S = z1S[c1S];
            if (typeof o1S != 'undefined' && typeof o1S != 'function')
            {
              o1S = this.gW(o1S);
              if (u1S)
              {
                u1S += ','
              }
              u1S += this.gW(c1S) + ':' + o1S
            }
          }
          return '{' + u1S + '}'
        }
      }
      return 'null';
    case 'number':
      ;
      return isFinite(z1S) ? String(z1S) : 'null';
    case 'string':
      ;
      P1S = z1S.length;
      u1S = '\"';
      for (c1S = 0; c1S < P1S; c1S += 1)
      {
        S1S = z1S.charAt(c1S);
        if (S1S >= ' ')
        {
          if (S1S == '\\' || S1S == '\"')
          {
            u1S += '\\'
          }
          u1S += S1S
        }
        else
        {
          switch (S1S)
          {
          case '\b':
            ;
            u1S += '\\b';
            break;
          case '\f':
            ;
            u1S += '\\f';
            break;
          case '\n':
            ;
            u1S += '\\n';
            break;
          case '\r':
            ;
            u1S += '\\r';
            break;
          case '\t':
            ;
            u1S += '\\t';
            break;
          default:
            ;
            S1S = S1S.charCodeAt();
            u1S += '\\u00' + Math.floor(S1S / 16).toString(16) + (S1S % 16).toString(16)
          }
        }
      }
      return u1S + '\"';
    case 'boolean':
      ;
      return String(z1S);
    default:
      ;
      return 'null'
    }
  },
  parse: function (N1S)
  {
    var b1S = 0;
    var s1S = ' ';

    function i1S(Sp)
    {
      throw {
        name: 'JSONError',
        message: Sp,
        Qn: b1S - 1,
        text: N1S
      }
    };

    function A1S()
    {
      s1S = N1S.charAt(b1S);
      b1S += 1;
      return s1S
    };

    function X1S()
    {
      while (s1S !== '' && s1S <= ' ')
      {
        A1S()
      }
    };

    function v1S()
    {
      var wp, gp = '',
        cp, Pp;
      if (s1S == '\"')
      {
        bj: while (A1S())
        {
          if (s1S == '\"')
          {
            A1S();
            return gp
          }
          else if (s1S == '\\')
          {
            switch (A1S())
            {
            case 'b':
              ;
              gp += '\b';
              break;
            case 'f':
              ;
              gp += '\f';
              break;
            case 'n':
              ;
              gp += '\n';
              break;
            case 'r':
              ;
              gp += '\r';
              break;
            case 't':
              ;
              gp += '\t';
              break;
            case 'u':
              ;
              Pp = 0;
              for (wp = 0; wp < 4; wp += 1)
              {
                cp = parseInt(A1S(), 16);
                if (!isFinite(cp))
                {
                  break bj
                }
                Pp = Pp * 16 + cp
              }
              gp += String.fromCharCode(Pp);
              break;
            default:
              ;
              gp += s1S
            }
          }
          else
          {
            gp += s1S
          }
        }
      }
      i1S("Bad string")
    };

    function E1S()
    {
      var Np = [];
      if (s1S == '[')
      {
        A1S();
        X1S();
        if (s1S == ']')
        {
          A1S();
          return Np
        }
        while (s1S)
        {
          Np.push(g1S());
          X1S();
          if (s1S == ']')
          {
            A1S();
            return Np
          }
          else if (s1S != ',')
          {
            break
          }
          A1S();
          X1S()
        }
      }
      i1S("Bad array")
    };

    function O1S()
    {
      var ip, vp = {};
      if (s1S == '{')
      {
        A1S();
        X1S();
        if (s1S == '}')
        {
          A1S();
          return vp
        }
        while (s1S)
        {
          ip = v1S();
          X1S();
          if (s1S != ':')
          {
            break
          }
          A1S();
          vp[ip] = g1S();
          X1S();
          if (s1S == '}')
          {
            A1S();
            return vp
          }
          else if (s1S != ',')
          {
            break
          }
          A1S();
          X1S()
        }
      }
      i1S("Bad object")
    };

    function w1S()
    {
      var Ap = '',
        Ep;
      if (s1S == '-')
      {
        Ap = '-';
        A1S()
      }
      while (s1S >= '0' && s1S <= '9')
      {
        Ap += s1S;
        A1S()
      }
      if (s1S == '.')
      {
        Ap += '.';
        while (A1S() && s1S >= '0' && s1S <= '9')
        {
          Ap += s1S
        }
      }
      if (s1S == 'e' || s1S == 'E')
      {
        Ap += 'e';
        A1S();
        if (s1S == '-' || s1S == '+')
        {
          Ap += s1S;
          A1S()
        }
        while (s1S >= '0' && s1S <= '9')
        {
          Ap += s1S;
          A1S()
        }
      }
      Ep = +Ap;
      if (!isFinite(Ep))
      {
        i1S("Bad number")
      }
      else
      {
        return Ep
      }
    };

    function q1S()
    {
      switch (s1S)
      {
      case 't':
        ;
        if (A1S() == 'r' && A1S() == 'u' && A1S() == 'e')
        {
          A1S();
          return true
        }
        break;
      case 'f':
        ;
        if (A1S() == 'a' && A1S() == 'l' && A1S() == 's' && A1S() == 'e')
        {
          A1S();
          return false
        }
        break;
      case 'n':
        ;
        if (A1S() == 'u' && A1S() == 'l' && A1S() == 'l')
        {
          A1S();
          return null
        }
        break
      }
      i1S("Syntax error")
    };

    function g1S()
    {
      X1S();
      switch (s1S)
      {
      case '{':
        ;
        return O1S();
      case '[':
        ;
        return E1S();
      case '\"':
        ;
        return v1S();
      case '-':
        ;
        return w1S();
      default:
        ;
        return s1S >= '0' && s1S <= '9' ? w1S() : q1S()
      }
    };
    return g1S()
  }
};

function mj()
{
  this.mW = null;
  this.FW = null;
  this.Mj = null;
  this.Hn = null;
  this.CW = null;
  this.eW = null;
  this._j = false;
  this.kW = new Array();
  this.ln = null;
  this.hW = null
};
mj.MW = 3;
mj.prototype.oW = function (nKS, J1S, _1S, BKS, h1S, d1S, k1S, M1S, W1S)
{
  var G1S = this;
  nKS.onmousedown = function (Xp)
  {
    var bp = false;
    OX(Xp, nKS, null, function (ON, qN, XN, bN)
    {
      if (W1S)
      {
        bp = W1S()
      }
    }, function (GN, MN, dN, kN, sN, hN, WN, _N)
    {
      if (!G1S._j && !bp)
      {
        if ((Math.abs(dN) > mj.MW) || (Math.abs(kN) > mj.MW))
        {
          G1S._j = true;
          G1S.kW = new Array();
          G1S.mW = J1S;
          G1S.Mj = _1S.offsetWidth;
          G1S.Hn = _1S.offsetHeight;
          G1S.ln = _1S.parentNode;
          G1S.hW = _1S.nextSibling;
          _1S.parentNode.removeChild(_1S);
          G1S.FW = _1S;
          G1S.CW = BKS;
          G1S.eW = document.createElement('div');
          G1S.eW.style.zIndex = BK;
          G1S.eW.style.position = 'absolute';
          G1S.eW.style.width = G1S.Mj + 'px';
          G1S.eW.style.height = G1S.Hn + 'px';
          G1S.eW.appendChild(G1S.FW);
          uj().appendChild(G1S.eW);
          h1S()
        }
      }
      if (G1S._j)
      {
        G1S.eW.style.left = WN + 7 + 'px';
        G1S.eW.style.top = _N - 16 + 'px'
      }
    }, function (lJ, eJ, $J, DJ, BJ, nJ)
    {
      if (!G1S._j)
      {
        d1S()
      }
      else
      {
        G1S._j = false;
        uj().removeChild(G1S.eW);
        if (G1S.LW)
        {
          G1S.LW(G1S.mW)
        }
        else
        {
          k1S()
        }
        for (var VJ in G1S.kW)
        {
          var JN = G1S.kW[VJ];
          JN.style.display = 'none'
        }
        G1S.kW = new Array();
        M1S()
      }
    })
  };
};
mj.prototype.HW = function (eKS, $KS, DKS, lKS)
{
  var VKS = this;
  B1(eKS, function (Op)
  {
    Op.event.cancelBubble = true;
    if (VKS._j)
    {
      if (eKS != VKS.FW)
      {
        DKS.style.display = 'block';
        DKS.style.width = VKS.Mj - (nK ? 0 : 2) + 'px';
        DKS.style.height = VKS.Hn - (nK ? 0 : 2) + 'px';
        DKS.style.border = '1px dashed #' + pX;
        VKS.LW = lKS;
        for (var sp in VKS.kW)
        {
          var qp = VKS.kW[sp];
          if (f1(qp.parentNode, DKS) && DKS != qp) qp.style.display = 'none'
        }
        if (!l1(VKS.kW, DKS)) VKS.kW.push(DKS)
      }
    }
  });
  Oj(eKS, function (dp)
  {
    dp.event.cancelBubble = true;
    if (VKS._j)
    {
      if (eKS != VKS.FW)
      {
        DKS.style.display = 'none';
        VKS.LW = null;
        Ej(DKS, VKS.kW)
      }
    }
  })
};
mj.prototype.Kn = function (QKS)
{
  var YKS = document.createElement('div');
  QKS.appendChild(YKS);
  return YKS
};

function yK(pKS, xKS, RKS, fKS, rKS, HKS, ZKS, FKS)
{
  var KKS = this;
  this.parentElement = pKS;
  this.bW = function () {};
  this.fn = FKS;
  this.value = RKS;
  this.XW = fKS;
  this.fontWeight = rKS;
  this.Tn = HKS;
  this.WW = ZKS;
  this.GW = false;
  this.iW = false;
  this.EW = document.createElement('div');
  this.EW.style.display = 'inline-block';
  this.EW.style.position = 'relative';
  this.EW.style.overflow = 'hidden';
  this.$W = document.createElement('div');
  this.$W.style.textDecoration = 'none';
  this.$W.style.display = 'block';
  this.$W.className = this.Tn;
  this.$W.style.whiteSpace = 'nowrap';
  this.$W.style.fontSize = this.XW + 'px';
  this.$W.style.fontWeight = this.fontWeight;
  this.$W.style.overflow = 'hidden';
  this.rn(this.value, false, true);
  this.bW = xKS;
  this.EW.appendChild(this.$W);
  this.parentElement.appendChild(this.EW);
  var TKS = function ()
  {
    if (KKS.GW) return;
    if (KKS.fn) KKS.fn();
    KKS.GW = true;
    var hp = document.createElement('input');
    hp.setAttribute("autocomplete", "off");
    hp.setAttribute("spellcheck", "false");
    hp.style.position = 'absolute';
    iK(hp, '0px');
    hp.style.top = '0px';
    hp.style.width = KKS.$W.offsetWidth + 'px';
    hp.style.height = KKS.$W.offsetHeight + 0 + 'px';
    hp.style.overflow = 'hidden';
    hp.style.border = 'none';
    hp.style.paddingTop = '0px';
    hp.style.paddingLeft = '0px';
    hp.style.paddingRight = '0px';
    hp.style.paddingBottom = '0px';
    hp.style.marginTop = '0px';
    hp.style.marginLeft = '0px';
    hp.style.marginRight = '0px';
    hp.style.marginBottom = '0px';
    hp.style.background = 'transparent';
    I(KKS.$W);
    KKS.$W.innerHTML = '&nbsp;';
    KKS.$W.style.width = '1px';
    hp.className = KKS.Tn;
    hp.style.fontSize = KKS.XW + 'px';
    hp.style.fontWeight = KKS.fontWeight;
    KKS.EW.appendChild(hp);
    hp.value = KKS.value;
    hp.onblur = function ()
    {
      KKS.EW.removeChild(hp);
      KKS.rn(KKS.value, false, false);
      setTimeout(function ()
      {
        KKS.GW = false
      }, 300);
      return false
    };
    hp.onkeyup = function (rJ)
    {
      var QJ = rJ;
      if (!QJ) QJ = window.event;
      if (QJ)
        if (QJ.keyCode == 13)
        {
          hp.blur();
          return
        }
      KKS.value = hp.value;
      var YJ = g1(KKS.value, KKS.Tn, KKS.XW, KKS.fontWeight, false);
      hp.style.width = YJ + 30 + 'px';
      KKS.EW.style.width = YJ + 30 + 'px';
      xKS(hp.value, false, YJ + 30);
      return false
    };
    hp.onmouseup = hp.onkeyup;
    hp.onkeyup();
    setTimeout(function ()
    {
      hp.focus()
    }, 100);
    return false
  };
  this.uW = TKS;
  this.$W.onmousedown = function (kp) {};
  this.$W.onmouseup = function (Mp)
  {
    if (KKS.GW) return true;
    var Gp = false;
    if (KKS.WW) Gp = KKS.WW();
    if (!Gp) TKS();
    return false
  };
};
yK.prototype.qW = function ()
{
  var IKS = g1(this.value, this.Tn, this.XW, this.fontWeight, false);
  IKS = Math.max(IKS, 20);
  this.$W.style.width = IKS + 'px';
  this.EW.style.width = IKS + 'px';
  return IKS
};
yK.prototype.rn = function (yKS, CKS, jKS)
{
  this.value = yKS;
  if (yKS == '' || R1(yKS) == '')
  {
    this.$W.innerHTML = '&nbsp;'
  }
  else
  {
    I(this.$W);
    this.$W.appendChild(document.createTextNode(yKS))
  }
  var mKS = this.qW();
  if (!jKS) this.bW(yKS, !CKS, mKS)
};
var ZX = null;
var Nj = new Array();

function g1(UKS, PKS, SKS, LKS, oKS)
{
  if (!LKS) LKS = 'normal';
  if (LKS === true) LKS = 'bold';
  if (LKS === false) LKS = 'normal';
  for (var cKS in Nj)
  {
    var zKS = Nj[cKS];
    if (zKS.text == UKS)
    {
      if (zKS.className == PKS && zKS.zW == SKS && zKS.fontWeight == LKS && !!zKS.Wj == !!oKS)
      {
        return zKS.width
      }
    }
  }
  if (ZX == null)
  {
    ZX = document.createElement('div');
    var uKS = ZX;
    uKS.style.visibility = 'hidden';
    uKS.style.position = 'absolute';
    iK(uKS, '-8000px');
    uKS.style.top = '-8000px';
    uKS.style.whiteSpace = 'nowrap';
    uj().appendChild(uKS)
  }
  var uKS = ZX;
  uKS.className = PKS;
  uKS.style.fontSize = SKS + 'px';
  uKS.style.fontStyle = oKS ? 'italic' : 'normal';
  if (LKS) uKS.style.fontWeight = LKS;
  uKS.appendChild(document.createTextNode(UKS));
  var aKS = uKS.offsetWidth;
  I(uKS);
  var zKS = new Object();
  zKS.text = UKS;
  zKS.className = PKS;
  zKS.zW = SKS;
  zKS.fontWeight = LKS;
  zKS.Wj = !!oKS;
  zKS.width = aKS;
  Nj.push(zKS);
  return aKS
};

function oK(gKS)
{
  if (gKS.indexOf('://') == -1) gKS = 'http://' + gKS;
  gKS = gKS.substring(gKS.indexOf('://') + '://'.length);
  if (gKS.indexOf('/') != -1) gKS = gKS.substring(0, gKS.indexOf('/'));
  return gKS.toLowerCase()
};

function l1(vKS, wKS)
{
  for (var NKS in vKS)
    if (vKS[NKS] == wKS) return true;
  return false
};

function I(iKS)
{
  if (typeof iKS == 'string') iKS = document.getElementById(iKS);
  if (!iKS) return;
  while (iKS.childNodes.length > 0) iKS.removeChild(iKS.childNodes[0])
};

function P1(EKS)
{
  var AKS = document.createElement('div');
  AKS.style.fontSize = '1px';
  AKS.style.height = EKS + 'px';
  AKS.style.width = 1 + 'px';
  return AKS
};

function Ej(XKS, qKS)
{
  for (var bKS = 0; bKS < qKS.length; bKS++)
  {
    if (qKS[bKS] == XKS)
    {
      qKS.splice(bKS, 1);
      bKS--
    }
  }
};

function H(hKS)
{
  var sKS = hKS ? hKS : window.event;
  var MKS = 0;
  var OKS = 0;
  var dKS = 0;
  var kKS = 0;
  if (sKS != null)
  {
    if (nK)
    {
      dKS = sKS.shiftKey;
      OKS = sKS.altKey;
      MKS = sKS.ctrlKey
    }
    else
    {
      dKS = sKS.shiftKey;
      MKS = sKS.ctrlKey;
      OKS = sKS.altKey;
      kKS = sKS.metaKey
    }
  }
  return (MKS || kKS || dKS)
};

function Ij(JKS)
{
  var WKS = JKS ? JKS : window.event;
  var ntS = 0;
  var GKS = 0;
  var _KS = 0;
  var BtS = 0;
  if (WKS != null)
  {
    if (nK)
    {
      _KS = WKS.shiftKey;
      GKS = WKS.altKey;
      ntS = WKS.ctrlKey
    }
    else
    {
      _KS = WKS.shiftKey;
      ntS = WKS.ctrlKey;
      GKS = WKS.altKey;
      BtS = WKS.metaKey
    }
  }
  return (ntS || BtS)
};

function xX(VtS)
{
  var ltS = VtS ? VtS : window.event;
  var YtS = 0;
  var etS = 0;
  var DtS = 0;
  var $tS = 0;
  if (ltS != null)
  {
    if (nK)
    {
      DtS = ltS.shiftKey;
      etS = ltS.altKey;
      YtS = ltS.ctrlKey
    }
    else
    {
      DtS = ltS.shiftKey;
      YtS = ltS.ctrlKey;
      etS = ltS.altKey;
      $tS = ltS.metaKey
    }
  }
  return (DtS)
};

function wK(QtS)
{
  QtS['noCacheRandom'] = _1()
};

function _1()
{
  return new Date().getTime() + Math.round(Math.random() * 10000) + ''
};

function aX(TtS, HtS, ZtS)
{
  wK(HtS);
  var rtS = pK.gW(HtS);
  Fj(TtS, rtS, function (Wp)
  {
    if (ZtS) ZtS(pK.parse((Wp)))
  })
};

function Fj(xtS, ftS, KtS)
{
  var RtS = o1();
  RtS.open(ftS == null ? "GET" : "POST", xtS, true);
  RtS.setRequestHeader("Content-Type", "text/json");
  RtS.onreadystatechange = function ()
  {
    var Jp = false;
    Jp = (RtS.readyState == 4);
    if (Jp)
    {
      var _p = RtS.responseText;
      KtS(_p)
    }
  };
  RtS.send(ftS)
};

function o1()
{
  var FtS = new XMLHttpRequest();
  return FtS
};

function zK()
{
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (eM)
  {
    var nM = Math.random() * 16 | 0,
      BM = eM == 'x' ? nM : (nM & 0x3 | 0x8);
    return BM.toString(16)
  })
};
var SK = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('');

function nX(CtS, ItS)
{
  var mtS = SK,
    ptS = [],
    jtS = 0;
  ItS = ItS || mtS.length;
  CtS = CtS || 22;
  for (jtS = 0; jtS < CtS; jtS++) ptS[jtS] = mtS[0 | Math.random() * ItS];
  return ptS.join('')
};

function Rj()
{
  return nX()
};

function R1(ytS)
{
  if (!ytS == null || ytS == undefined) return '';
  return ytS.replace(/^\s+/, '').replace(/\s+$/, '')
};

function gX(LtS)
{
   console.log(LtS);
  var otS = document.createElement('span');
  var UtS = LtS.indexOf('OneTab');
  var atS = UtS + 'OneTab'.length;
  if (UtS == 0)
  {
    otS.appendChild(cK());
    otS.appendChild(document.createTextNode(LtS.substring(atS)))
  }
  else
  {
    otS.appendChild(document.createTextNode(LtS.substring(0, UtS)));
    otS.appendChild(cK());
    if (atS != LtS.length) otS.appendChild(document.createTextNode(LtS.substring(atS)))
  }
  return otS
};

function cK()
{
  var utS = document.createElement('span');
  var ztS = document.createElement('span');
  ztS.style.fontStyle = 'italic';
  ztS.appendChild(document.createTextNode('One'));
  utS.appendChild(ztS);
  utS.appendChild(document.createTextNode('Tab'));
  return utS
};

function M(StS)
{
  var PtS = StS.split('OneTab');
  var gtS = document.createElement('span');
  for (var ctS in PtS)
  {
    if (PtS[ctS] == '') gtS.appendChild(cK());
    else gtS.appendChild(document.createTextNode(PtS[ctS]))
  }
  return gtS
};

function B(vtS)
{
  var NtS = new Date(vtS.valueOf()),
    wtS = (vtS.getUTCDay() + 6) % 7,
    itS;
  NtS.setUTCDate(NtS.getUTCDate() - wtS + 3);
  itS = NtS.valueOf();
  NtS.setUTCMonth(0, 1);
  if (NtS.getUTCDay() !== 4)
  {
    NtS.setUTCMonth(0, 1 + ((4 - NtS.getUTCDay()) + 7) % 7)
  }
  return Math.ceil((itS - NtS) / (7 * 24 * 3600 * 1000)) + 1
};

function gK(EtS, AtS)
{
  while (EtS.length < AtS) EtS = '0' + EtS;
  return EtS
};

function c1(XtS)
{
  return (XtS.getUTCFullYear() + '').substr(2) + gK(B(XtS) + '', 2)
};

function xj(btS)
{
  if (btS == 0) return x1('total0Tabs');
  if (btS == 1) return x1('total1Tab');
  return x1('total2Tabs').replace('2', btS + '')
};

function Qj(OtS)
{
  var qtS = (OtS == 1 ? x1('1tab') : (x1('2tabs').replace('2', OtS + '')));
  return qtS
};

function G1(dtS, htS)
{
  var stS = '';
  for (var ktS = 0; ktS < htS; ktS++) stS += dtS;
  return stS
};

function XX(MtS)
{
  MtS.sort(function (DM, lM)
  {
    if (DM['starred'] || lM['starred'])
    {
      if (!lM['starred']) return -1;
      else if (!DM['starred']) return 1;
      else
      {
        if (DM['starredDate'] > lM['starredDate']) return 1;
        if (DM['starredDate'] < lM['starredDate']) return -1;
        return 0
      }
    }
    else
    {
      if (DM['createDate'] > lM['createDate']) return -1;
      if (DM['createDate'] < lM['createDate']) return 1;
      return 0
    }
  })
};

function W1(GtS)
{
  if (!GtS) GtS = '';
  return GtS.replace(/[\x00-\x1F\x7F-\x9F]/g, "")
};
var N1, qK, X, xK, qX;
var pj, jj;
var oj, Uj;
var AK = !!('ontouchstart' in window);

function OX(JtS, WtS, nhS, BhS, _tS, ehS)
{
  N1 = WtS;
  qK = nhS;
  X = BhS;
  xK = _tS;
  qX = ehS;
  oj = 0;
  Uj = 0;
  if (AK && (JtS instanceof TouchEvent))
  {
    if (JtS.touches.length > 1)
    {
      return
    }
    pj = JtS.touches.item(0).pageX;
    jj = JtS.touches.item(0).pageY;
    document.addEventListener("touchmove", fK, false);
    document.addEventListener("touchend", aj, false);
    JtS.preventDefault()
  }
  else
  {
    if (nK || mK)
    {
      pj = window.event.clientX + (mK ? 0 : document.documentElement.scrollLeft) + document.body.scrollLeft;
      jj = window.event.clientY + (mK ? 0 : document.documentElement.scrollTop) + document.body.scrollTop
    }
    else
    {
      pj = JtS.clientX + window.scrollX;
      jj = JtS.clientY + window.scrollY
    }
    if (nK)
    {
      document.attachEvent(bX, fK);
      document.attachEvent(J, aj);
      window.event.cancelBubble = true;
      window.event.returnValue = false
    }
    else
    {
      document.addEventListener(Aj, fK, false);
      document.addEventListener(m1, aj, false);
      JtS.preventDefault()
    }
  }
  X(N1, qK, pj, jj)
};

function fK($hS)
{
  var QhS, YhS, DhS, VhS;
  if (AK && ($hS instanceof TouchEvent))
  {
    if ($hS.touches.length > 1)
    {
      DhS = 0;
      VhS = 0;
      xK(N1, qK, DhS, VhS, pj, jj, QhS, YhS);
      return aj($hS)
    }
    QhS = $hS.touches.item(0).pageX;
    YhS = $hS.touches.item(0).pageY
  }
  else
  {
    if (nK || mK)
    {
      QhS = window.event.clientX + (mK ? 0 : document.documentElement.scrollLeft) + document.body.scrollLeft;
      YhS = window.event.clientY + (mK ? 0 : document.documentElement.scrollTop) + document.body.scrollTop
    }
    else
    {
      QhS = $hS.clientX + window.scrollX;
      YhS = $hS.clientY + window.scrollY
    }
  }
  DhS = QhS - pj;
  VhS = YhS - jj;
  var lhS = false;
  if (oj != DhS || Uj != VhS) lhS = true;
  oj = DhS;
  Uj = VhS;
  if (lhS)
  {
    xK(N1, qK, DhS, VhS, pj, jj, QhS, YhS)
  }
  if (nK)
  {
    window.event.cancelBubble = true;
    window.event.returnValue = false
  }
  else
  {
    $hS.preventDefault()
  }
};

function aj(rhS)
{
  if (AK && (rhS instanceof TouchEvent))
  {
    document.removeEventListener("touchmove", fK, false);
    document.removeEventListener("touchend", aj, false)
  }
  else
  {
    if (nK)
    {
      document.detachEvent(bX, fK);
      document.detachEvent(J, aj)
    }
    else
    {
      document.removeEventListener(Aj, fK, false);
      document.removeEventListener(m1, aj, false)
    }
  }
  qX(N1, qK, oj, Uj, pj, jj)
};

function jK(RhS, ThS, ZhS, HhS)
{
  this.sW = RhS;
  this.type = ThS;
  this.nn = ZhS;
  this.kj = HhS
};
jK.prototype.remove = function ()
{
  if (nK)
  {
    this.sW.detachEvent(this.type, this.nn)
  }
  else
  {
    this.sW.removeEventListener(this.type, this.nn, this.kj)
  }
};

function $(fhS, KhS)
{
  fhS.onmousemove = function (VM)
  {
    KhS(new z1(fhS, VM))
  };
};

function Kj(xhS, FhS)
{
  xhS.onmousedown = function ($M)
  {
    FhS(new z1(xhS, $M))
  };
};

function P(phS, IhS)
{
  phS.onmouseover = function (YM)
  {
    IhS(new z1(phS, YM))
  };
};

function Zj(mhS, ChS)
{
  mhS.onmouseup = function (QM)
  {
    ChS(new z1(mhS, QM))
  };
};

function w1(jhS, yhS)
{
  jhS.onmouseout = function (rM)
  {
    yhS(new z1(jhS, rM))
  };
};

function LX(ahS, LhS)
{
  ahS.onclick = function (HM)
  {
    LhS(new z1(ahS, HM))
  };
};

function kX(UhS, ohS)
{
  UhS.ondblclick = function (ZM)
  {
    ohS(new z1(UhS, ZM))
  };
};

function CK(zhS, uhS)
{
  QK(zhS, rK, LK, uhS)
};

function TK(ShS, PhS)
{
  QK(ShS, T, F1, PhS)
};

function B1(chS, ghS)
{
  return QK(chS, r1, $j, ghS)
};

function GK(whS, NhS)
{
  return QK(whS, m1, J, NhS)
};

function Oj(vhS, ihS)
{
  var EhS;
  if (nK)
  {
    EhS = function (TM)
    {
      ihS(new z1(vhS, TM))
    };
    vhS.attachEvent(JX, EhS);
    return new jK(vhS, JX, EhS, false)
  }
  else
  {
    EhS = function (RM)
    {
      var fM, KM;
      fM = RM.currentTarget;
      KM = RM.relatedTarget;
      if (fM == vhS && fM != KM && !f1(fM, KM))
      {
        ihS(new z1(vhS, RM))
      }
    };
    vhS.addEventListener(GX, EhS, false);
    return new jK(vhS, GX, EhS, false)
  }
};

function X1(AhS, XhS)
{
  if (nK)
  {
    AhS.onmouseleave = function (xM)
    {
      XhS(new z1(AhS, xM))
    };
  }
  else
  {
    AhS.onmouseout = function (FM)
    {
      var pM, IM;
      pM = FM.currentTarget;
      IM = FM.relatedTarget;
      if (pM == AhS && pM != IM && !f1(pM, IM))
      {
        XhS(new z1(AhS, FM))
      }
    };
  }
};

function sj(OhS, qhS)
{
  if (nK)
  {
    for (var shS in OhS)
    {
      var bhS = OhS[shS];
      bhS.onmouseleave = nj(bhS, OhS, qhS)
    }
  }
  else
  {
    for (var shS in OhS)
    {
      var bhS = OhS[shS];
      bhS.onmouseout = _(bhS, OhS, qhS)
    }
  }
};

function _(dhS, khS, hhS)
{
  return function (mM)
  {
    var CM, yM;
    CM = mM.currentTarget;
    yM = mM.relatedTarget;
    if (CM == dhS && CM != yM && !f1(CM, yM))
    {
      for (var jM in khS)
        if (yM == khS[jM]) return;
      hhS(new z1(dhS, mM))
    }
  };
};

function nj(MhS, WhS, GhS)
{
  return function ()
  {
    for (var aM in WhS)
      if (window.event.toElement == WhS[aM]) return;
    GhS(new z1(MhS, window.event))
  };
};

function f1(_hS, BmS)
{
  try
  {
    if (!BmS) return false;
    while (BmS.parentNode)
      if ((BmS = BmS.parentNode) == _hS) return true;
    return false
  }
  catch (JhS)
  {
    return false
  }
};

function z1(nmS, emS)
{
  this.TW = nmS;
  this.event = emS;
  this.RW = null;
  this.ZW = null;
  this.Bn = function ()
  {
    if (this.RW == null)
    {
      var LM = n1(nmS, emS);
      this.RW = LM.x;
      this.ZW = LM.y
    }
    return this.RW
  };
  this._W = function ()
  {
    if (this.RW == null)
    {
      this.Bn()
    }
    return this.ZW
  };
};

function QK(VmS, DmS, $mS, YmS)
{
  var lmS = function (UM)
  {
    var oM = new z1(VmS, UM);
    YmS(oM)
  };
  if (nK)
  {
    VmS.attachEvent($mS, lmS);
    return new jK(VmS, $mS, lmS, false)
  }
  else
  {
    VmS.addEventListener(DmS, lmS, false);
    return new jK(VmS, DmS, lmS, false)
  }
};

function lj(QmS, TmS, HmS, rmS, ZmS)
{
  Kj(QmS, function (zM)
  {
    OX(zM.event, QmS, TmS, HmS, rmS, ZmS)
  })
};

function IX(RmS)
{
  return i1(RmS)
};

function n1(fmS, KmS)
{
  if (nK || M6S)
  {
    return new _6S(window.event.offsetX, window.event.offsetY)
  }
  return i1(KmS).Rn(EK(fmS))
};

function i1(xmS)
{
  if (nK || mK)
  {
    var pmS = window.event.clientX + (mK ? 0 : document.documentElement.scrollLeft) + document.body.scrollLeft;
    var FmS = window.event.clientY + (mK ? 0 : document.documentElement.scrollTop) + document.body.scrollTop
  }
  else
  {
    var pmS = xmS.clientX + window.scrollX;
    var FmS = xmS.clientY + window.scrollY
  }
  return new _6S(pmS, FmS)
};

function EK(ImS)
{
  var mmS = ImS;
  var ymS = 0;
  var jmS = 0;
  while (true)
  {
    var CmS = mmS.offsetParent;
    if (CmS == undefined) break;
    ymS += mmS.offsetLeft;
    jmS += mmS.offsetTop;
    mmS = CmS
  }
  return new _6S(ymS, jmS)
};

function Y(LmS, UmS, omS)
{
  if (!omS)
    if (!G6S()) return;
  try
  {
    if (UmS == 100)
    {
      LmS.style.filter = '';
      LmS.style.DW = '';
      LmS.style.opacity = ''
    }
    else
    {
      LmS.style.filter = 'alpha(opacity=' + UmS + ')';
      LmS.style.DW = UmS / 100;
      LmS.style.opacity = UmS / 100
    }
  }
  catch (amS)
  {}
};

function vj()
{
  if (nK || mK) return (mK ? 0 : document.documentElement.scrollTop) + document.body.scrollTop;
  else return window.scrollY
};

function sX()
{
  if (nK || mK) return (mK ? 0 : document.documentElement.scrollLeft) + document.body.scrollLeft;
  else return window.scrollX
};

function e1(zmS)
{
  YK('getState',
  {}, function (uM)
  {
    if (zmS) zmS(uM)
  })
};

function H1(SmS, umS)
{
  YK('storeState',
  {
    rW: SmS
  }, function (SM)
  {
    if (umS) umS(SM)
  })
};

function yX(PmS, cmS)
{
  YK('getSetting',
  {
    vW: PmS
  }, function (PM)
  {
    if (cmS) cmS(PM.value)
  })
};

function DX(gmS)
{
  YK('getSettings',
  {}, function (cM)
  {
    if (gmS) gmS(cM)
  })
};

function NK(vmS, NmS, wmS)
{
  YK('storeSetting',
  {
    key: vmS,
    value: NmS
  }, function (gM)
  {
    if (wmS) wmS(gM)
  })
};

function C(EmS, imS)
{
  YK('storeSettings',
  {
    AW: EmS
  }, function (wM)
  {
    if (imS) imS(wM)
  })
};

function bK(AmS, bmS, XmS)
{
  YK('restoreTabsMeta',
  {
    Gj: AmS,
    xn: bmS
  }, function (NM)
  {
    if (XmS) XmS(NM)
  })
};

function UK(qmS)
{
  YK('upgradeAvailable',
  {}, function (vM)
  {
    if (qmS) qmS(vM.value)
  })
};

function WK(OmS)
{
  YK('getAllMessages',
  {}, function (iM)
  {
    if (OmS) OmS(iM)
  })
};
MK(function ()
{
  d1()
});
var rX = new mj();
var RK = undefined;
var O1 = 11;

function uX()
{
  if (RK) RK.style.display = 'none';
  RK = undefined
};

function SX(dmS, smS)
{
  var hmS = {};
  YK('getExtensionKey',
  {}, function (AM)
  {
    hmS['key'] = AM;
    var EM = [];
    hmS['tabGroups'] = dmS;
    aX(L1 + '/api/createPage', hmS, function (HJ)
    {
      YK('createNewTab',
      {
        url: HJ['url']
      }, function ()
      {
        smS()
      })
    })
  })
};

function $K(GmS, _mS, kmS, MmS, B2S, JmS)
{
  var WmS = this;
  this.EW = document.createElement('div');
  Cj(this.EW, kmS + 'px');
  this.EW.style.display = 'inline-block';
  this.EW.style.fontSize = '11px';
  this.EW.className = 'clickable';
  this.EW.appendChild(document.createTextNode(_mS));
  this.en(B2S);
  this.EW.onclick = function (XM)
  {
    if (WmS.yW) MmS(XM, WmS.EW);
    else if (WmS.PW) WmS.PW(XM)
  };
  GmS.appendChild(this.EW);
  this.PW = JmS
};
$K.prototype.en = function (n2S)
{
  this.yW = n2S;
  if (!this.yW) this.EW.style.color = '#999';
  else
  {
    this.EW.style.color = ''
  }
};

function QX(j2S)
{
  var L2S = [];
  var p2S = function (qM)
  {
    for (var bM in L2S) L2S[bM](qM)
  };
  var x2S = function (OM)
  {
    e1(function (TJ)
    {
      var ZJ = TJ['tabGroups'];
      for (var fJ = 0; fJ < ZJ.length; fJ++)
      {
        var RJ = ZJ[fJ];
        if (RJ['id'] == j2S['id'])
        {
          RJ['locked'] = !!j2S['locked'];
          RJ['starred'] = !!j2S['starred'];
          RJ['starredDate'] = j2S['starredDate'];
          RJ['label'] = j2S['label'];
          break
        }
      }
      H1(TJ, function ()
      {
        if (OM) OM()
      })
    })
  };
  var r2S = document.createElement('div');
  r2S.style.paddingTop = '15px';
  r2S.style.paddingLeft = '0px';
  var D2S = document.createElement('div');
  r2S.appendChild(D2S);
  b1(D2S, '20px');
  var c2S = document.createElement('div');
  D2S.appendChild(c2S);
  c2S.style.display = 'inline-block';
  c2S.style.verticalAlign = 'middle';
  b1(c2S, '16px');
  var Z2S = j2S['tabsMeta'].length;
  var R2S;
  var u2S;
  var o2S;
  var P2S, w2S;
  c2S.appendChild(function ()
  {
    var sM = document.createElement('img');
    sM.style.display = 'inline';
    sM.style.verticalAlign = 'middle';
    sM.src = 'images/star.png';
    sM.style.width = '22px';
    sM.style.height = '21px';
    Cj(sM, '11px');
    sM.style.position = 'relative';
    iK(sM, '-2px');
    P2S = sM;
    return sM
  }());
  c2S.appendChild(function ()
  {
    var dM = document.createElement('img');
    dM.style.display = 'inline';
    dM.style.verticalAlign = 'middle';
    dM.src = 'images/lock.png';
    dM.style.width = '14px';
    dM.style.height = '18px';
    Cj(dM, '19px');
    dM.style.position = 'relative';
    iK(dM, '2px');
    w2S = dM;
    return dM
  }());
  P2S.style.display = j2S['starred'] ? 'inline' : 'none';
  w2S.style.display = j2S['locked'] ? 'inline' : 'none';
  c2S.appendChild(function ()
  {
    var hM = document.createElement('div');
    hM.style.display = 'inline-block';
    hM.style.fontSize = '0px';
    hM.style.color = '#444';
    hM.style.fontWeight = '300';
    hM.style.verticalAlign = 'middle';
    u2S = document.createElement('div');
    u2S.style.fontSize = '0px';
    u2S.style.display = 'none';
    Cj(u2S, '30px');
    o2S = new yK(u2S, function (xJ, KJ)
    {
      if (KJ)
      {
        u2S.style.display = (R1(xJ) != '') ? 'inline-block' : 'none';
        j2S['label'] = R1(xJ) == '' ? '' : xJ;
        x2S(function ()
        {
          YK('recreateContextMenus')
        })
      }
    }, j2S['label'] ? j2S['label'] : '', 26, '300', 'tabGroupTitleText', function ()
    {
      return j2S['locked']
    }, undefined);
    hM.appendChild(u2S);
    return hM
  }());
  u2S.style.display = (j2S['label'] && R1(j2S['label']) != '') ? 'inline-block' : 'none';
  c2S.appendChild(function ()
  {
    var kM = document.createElement('div');
    kM.style.display = 'inline-block';
    kM.style.fontSize = '26px';
    kM.style.color = '#777';
    kM.style.fontWeight = '300';
    kM.style.verticalAlign = 'middle';
    kM.onclick = function ()
    {
      u2S.style.display = 'inline-block';
      o2S.uW()
    };
    R2S = function ()
    {
      I(kM);
      var FJ = Qj(Z2S);
      kM.appendChild(document.createTextNode(FJ))
    };
    R2S();
    return kM
  }());
  c2S.appendChild(function ()
  {
    var GM = document.createElement('div');
    GM.style.display = 'inline-block';
    b1(GM, '28px');
    GM.style.verticalAlign = 'middle';
    GM.style.fontSize = '0px';
    GM.appendChild(function ()
    {
      var pJ = document.createElement('div');
      pJ.style.fontSize = '11px';
      pJ.style.fontWeight = '400';
      pJ.style.color = '#888';
      pJ.style.paddingTop = '0px';
      pJ.style.paddingBottom = '2px';
      pJ.appendChild(document.createTextNode(x1('createdPreceedingDate') + ' ' + new Date(j2S['createDate']).toLocaleString()));
      return pJ
    }());
    new $K(GM, x1('restoreAll'), 30, function (IJ)
    {
      var CJ = H(IJ);
      var mJ = xX(IJ);
      var jJ;
      if (CJ)
      {
        jJ = mJ ? 'newWindow' : 'currentWindow'
      }
      yX('restoreRemoval', function (ne)
      {
        if (CJ || j2S['locked'] || ne == 'keep')
        {
          m2S(j2S['id'], jJ)
        }
        else
        {
          V2S(j2S['id'], true, jJ);
          r2S.parentNode.removeChild(r2S)
        }
      })
    }, true);
    var MM = new $K(GM, x1('deleteAll'), 30, function (yJ)
    {
      var aJ = x1('areYouSureYouWantToDeleteThisTab');
      if (Z2S >= 2) aJ = x1('areYouSureYouWantToDeleteTheseTabs');
      if (confirm(aJ))
      {
        V2S(j2S['id'], false);
        r2S.parentNode.removeChild(r2S)
      }
    }, !j2S['locked'], function (LJ)
    {
      alert(x1('unlockBeforeDeleting'))
    });
    L2S.push(function (UJ)
    {
      MM.en(!UJ)
    });
    new $K(GM, x1('shareAsWebPage'), 30, function (oJ, zJ)
    {
      I(zJ);
      zJ.appendChild(document.createTextNode(x1('pleaseWaitTripleDot')));
      SX([j2S], function ()
      {
        I(zJ);
        zJ.appendChild(document.createTextNode(x1('shareAsWebPage')))
      })
    }, true);
    GM.appendChild(function ()
    {
      var PJ = document.createElement('div');
      PJ.style.display = 'inline-block';
      PJ.style.position = 'relative';
      PJ.style.fontSize = O1 + 'px';
      PJ.className = 'clickable';
      PJ.appendChild(document.createTextNode(x1('moreTripleDot')));
      var uJ = document.createElement('div');
      PJ.appendChild(uJ);
      if (k6S) uJ.style['box-shadow'] = 'rgb(221, 221, 221) 1px 1px 1px 1px';
      if (W6S) uJ.style['boxShadow'] = 'rgb(221, 221, 221) 1px 1px 1px 1px';
      uJ.style.backgroundColor = '#fff';
      uJ.style.paddingTop = '11px';
      b1(uJ, '18px');
      Cj(uJ, '16px');
      uJ.style.paddingBottom = '11px';
      uJ.style.display = 'none';
      uJ.style.position = 'absolute';
      uJ.style.top = '-11px';
      iK(uJ, '-18px');
      uJ.style.zIndex = 10000;
      var SJ = function ($e, Ve, De)
      {
        var le = document.createElement('div');
        le.style.display = 'inline-block';
        le.style.paddingBottom = Ve + 'px';
        le.style.fontSize = O1 + 'px';
        le.style.whiteSpace = 'pre';
        le.className = 'clickable';
        le.appendChild(document.createTextNode($e));
        var ee = function ($y)
        {
          I(le);
          le.appendChild(document.createTextNode($y))
        };
        le.addEventListener('mousedown', function (Yy)
        {
          Yy.stopPropagation();
          uX();
          De(Yy, ee)
        }, false);
        return le
      };
      uJ.appendChild(SJ(x1('nameThisTabGroup'), 6, function (Ye)
      {
        if (!j2S['label'])
        {
          o2S.rn('', false, true)
        }
        u2S.style.display = 'inline-block';
        o2S.uW()
      }));
      uJ.appendChild(SJ(j2S['locked'] ? x1('unlockTabGroup') : x1('lockTabGroup'), 6, function (Qe, re)
      {
        j2S['locked'] = !j2S['locked'];
        re(j2S['locked'] ? x1('unlockTabGroup') : x1('lockTabGroup'));
        w2S.style.display = j2S['locked'] ? 'inline' : 'none';
        p2S(j2S['locked']);
        x2S(function () {})
      }));
      uJ.appendChild(SJ(j2S['starred'] ? x1('unstarTabGroup') : x1('starTabGroup'), 6, function (He, Ze)
      {
        j2S['starred'] = !j2S['starred'];
        if (j2S['starred']) j2S['starredDate'] = new Date().getTime();
        Ze(j2S['starred'] ? x1('unstarTabGroup') : x1('starTabGroup'));
        P2S.style.display = j2S['starred'] ? 'inline' : 'none';
        x2S(function ()
        {
          window.scrollTo(0, 0);
          document.location.reload()
        })
      }));
      uJ.appendChild(SJ(x1('help'), 0, function (Te)
      {
        YK('createNewTab',
        {
          url: L1 + '/help'
        })
      }));
      PJ.onclick = function ()
      {
        uJ.style.display = 'block';
        RK = uJ
      };
      return PJ
    }());
    return GM
  }());
  var S2S = function (JM, _M, WM)
  {
    e1(function (wJ)
    {
      var cJ = {};
      var gJ = wJ['tabGroups'];
      for (var vJ = 0; vJ < gJ.length; vJ++)
      {
        var NJ = gJ[vJ];
        if (NJ['id'] == JM)
        {
          for (var iJ = 0; iJ < NJ['tabsMeta'].length; iJ++)
          {
            if (NJ['tabsMeta'][iJ]['id'] == _M)
            {
              NJ['tabsMeta'].splice(iJ, 1);
              j2S = NJ;
              if (NJ['tabsMeta'].length == 0)
              {
                cJ.VW = true;
                gJ.splice(vJ, 1)
              }
              break
            }
          }
          break
        }
      }
      H1(wJ, function ()
      {
        WM(cJ)
      })
    })
  };
  var m2S = function (BF, nF)
  {
    e1(function (AJ)
    {
      var EJ = AJ['tabGroups'];
      var qJ;
      for (var bJ = 0; bJ < EJ.length; bJ++)
      {
        var XJ = EJ[bJ];
        if (XJ['id'] == BF)
        {
          qJ = XJ;
          break
        }
      }
      bK(qJ['tabsMeta'], nF)
    })
  };
  var V2S = function (lF, eF, DF)
  {
    e1(function (sJ)
    {
      var OJ = sJ['tabGroups'];
      var kJ;
      for (var hJ = 0; hJ < OJ.length; hJ++)
      {
        var dJ = OJ[hJ];
        if (dJ['id'] == lF)
        {
          kJ = dJ;
          break
        }
      }
      if (eF)
      {
        setTimeout(function ()
        {
          bK(kJ['tabsMeta'], DF)
        }, 100)
      }
      OJ.splice(hJ, 1);
      H1(sJ)
    })
  };
  var I2S = document.createElement('div');
  r2S.appendChild(I2S);
  Cj(I2S, '20px');
  b1(I2S, '12px');
  I2S.style.paddingTop = '12px';
  for (var y2S in j2S['tabsMeta'])
  {
    var T2S = j2S['tabsMeta'][y2S];
    var U2S = document.createElement('div');
    U2S.style['word-break'] = 'break-all';
    var g2S = document.createElement('div');
    var f2S = rX.Kn(g2S);
    f2S.style.marginLeft = '20px';
    g2S.appendChild(U2S);
    I2S.appendChild(g2S);
    U2S.style.display = 'inline-block';
    b1(U2S, '55px');
    U2S.style.paddingTop = '8px';
    U2S.style.position = 'relative';
    U2S.style.fontSize = '13px';
    var z2S = 'https://www.google.com/s2/favicons?domain=' + oK(T2S['url']);
    var K2S = oK(T2S['url']);
    if (K2S == 'news.ycombinator.com') z2S = 'https://news.ycombinator.com/favicon.ico';
    var H2S = document.createElement('img');
    H2S.src = z2S;
    H2S.style.position = 'absolute';
    H2S.style.top = '9px';
    iK(H2S, '25px');
    H2S.style.width = '16px';
    H2S.style.height = '16px';
    H2S.style.cursor = j2S['locked'] ? 'default' : 'move';
    U2S.appendChild(H2S);
    var Y2S = function (VF)
    {
      L2S.push(function (MJ)
      {
        VF.style.cursor = j2S['locked'] ? 'auto' : 'move'
      })
    }(H2S);
    var a2S = document.createElement('a');
    a2S.className = 'clickable';
    Cj(a2S, '12px');
    a2S.style.textDecoration = 'none';
    a2S.appendChild(document.createTextNode(W1(T2S['title'] ? T2S['title'] : 'Untitled')));
    a2S.innerHTML += '&nbsp';
    var C2S = T2S['url'];
    if (C2S.indexOf('://') == -1 && C2S.indexOf(':') == -1) C2S = 'http://' + C2S;
    C2S = kK(C2S);
    a2S.href = C2S;
    a2S.onclick = function (QF, $F, YF)
    {
      return function (GJ)
      {
        var _J = H(GJ);
        var WJ = xX(GJ);
        yX('restoreRemoval', function (Re)
        {
          if (_J || j2S['locked'] || Re == 'keep')
          {
            if (WJ)
            {
              YK('createNewTabsInNewFocusedWindow',
              {
                Gj: [QF]
              })
            }
            else
            {
              YK('createNewTabInLastFocusedWindowWithOpts',
              {
                url: YF,
                JW: !!QF['pinned'],
                SW: false
              })
            }
          }
          else
          {
            S2S(j2S['id'], QF['id'], function (Qy)
            {
              Z2S--;
              R2S();
              $F.parentNode.removeChild($F);
              if (Qy.VW) r2S.parentNode.removeChild(r2S);
              YK('createNewTabInLastFocusedWindowWithOpts',
              {
                url: YF,
                JW: !!QF['pinned'],
                SW: false
              });
              setTimeout(function ()
              {
                YK('closeOneTabIfEmpty')
              }, 200)
            })
          }
        });
        return false
      };
    }(T2S, U2S, C2S);
    U2S.appendChild(a2S);
    var l2S = document.createElement('img');
    l2S.src = 'images/cross.png';
    l2S.style.position = 'absolute';
    l2S.style.top = '10px';
    iK(l2S, '0px');
    l2S.style.width = 28 / 2 + 'px';
    l2S.style.height = 26 / 2 + 'px';
    l2S.style.verticalAlign = 'middle';
    l2S.style.paddingTop = '2px';
    l2S.style.visibility = 'hidden';
    l2S.style.cursor = 'pointer';
    U2S.appendChild(l2S);
    l2S.onmousedown = function (HF, rF)
    {
      return function ()
      {
        rF.parentNode.removeChild(rF);
        S2S(j2S['id'], HF['id'], function (fe)
        {
          Z2S--;
          R2S();
          if (fe.VW) r2S.parentNode.removeChild(r2S)
        })
      };
    }(T2S, U2S);
    B1(U2S, function (ZF)
    {
      return function (JJ)
      {
        if (!j2S['locked'])
        {
          if (!rX._j) ZF.style.visibility = 'visible'
        }
      }
    }(l2S));
    Oj(U2S, function (TF)
    {
      return function (Bq)
      {
        TF.style.visibility = 'hidden'
      }
    }(l2S));
    var Y2S = function (RF, fF)
    {
      rX.oW(RF,
      {
        BW: j2S['id'],
        pW: fF['id'],
        Jj: r2S,
        lW: fF
      }, RF, 'tabLink', function () {}, function () {}, function ()
      {
        rX.ln.insertBefore(rX.FW, rX.hW)
      }, function () {}, function ()
      {
        return !!j2S['locked']
      })
    }(U2S, T2S);
    var Y2S = function (KF)
    {
      rX.HW(g2S, 'tabLink', f2S, function (eq)
      {
        var nq = KF['id'];
        F2S(nq, eq)
      })
    }(T2S)
  }
  var F2S = function (xF, yF)
  {
    var pF = yF.BW;
    var CF = yF.Jj;
    var jF = CF.parentNode;
    var FF;
    var mF = j2S['id'];
    var LF = r2S;
    var aF = LF.parentNode;
    var IF;
    e1(function (Dq)
    {
      var lq = Dq['tabGroups'];
      bj: for (var $q = 0; $q < lq.length; $q++)
      {
        var Vq = lq[$q];
        for (var Yq = 0; Yq < Vq['tabsMeta'].length; Yq++)
        {
          if (Vq['tabsMeta'][Yq]['id'] == yF.pW)
          {
            Vq['tabsMeta'].splice(Yq, 1);
            FF = Vq;
            break bj
          }
        }
      }
      bj: for (var $q = 0; $q < lq.length; $q++)
      {
        var Vq = lq[$q];
        if (Vq['id'] != j2S['id']) continue;
        if (xF)
        {
          for (var Yq = 0; Yq < Vq['tabsMeta'].length; Yq++)
          {
            if (Vq['tabsMeta'][Yq]['id'] == xF)
            {
              Vq['tabsMeta'].splice(Yq, 0, yF.lW);
              IF = Vq;
              break bj
            }
          }
        }
        else
        {
          Vq['tabsMeta'].push(yF.lW);
          IF = Vq;
          break bj
        }
      }
      H1(Dq);
      aF.insertBefore(QX(IF), LF);
      aF.removeChild(LF);
      if (pF != mF)
      {
        if (FF['tabsMeta'].length > 0)
        {
          jF.insertBefore(QX(FF), CF)
        }
        jF.removeChild(CF)
      }
    })
  };
  var e2S = document.createElement('div');
  e2S.style.height = '19px';
  e2S.style.paddingTop = '3px';
  b1(e2S, '20px');
  r2S.appendChild(e2S);
  var Q2S = rX.Kn(e2S);
  Q2S.style.marginLeft = '10px';
  rX.HW(e2S, 'tabLink', Q2S, function (oF)
  {
    var UF = undefined;
    F2S(UF, oF)
  });
  return r2S
};

function RX(v2S, N2S)
{
  var i2S = document.createElement('span');
  i2S.appendChild(document.createTextNode('≡'));
  i2S.style.fontSize = v2S + 'px';
  i2S.style.fontWeight = 400;
  i2S.style.position = 'relative';
  i2S.style.top = N2S + 'px';
  return i2S
};

function XK()
{
  var E2S = document.getElementById('settingsDiv');
  I('div');
  E2S.style.position = 'absolute';
  E2S.style.top = '9px';
  J1(E2S, '5px');
  E2S.style.paddingTop = '10px';
  E2S.style.paddingBottom = '10px';
  b1(E2S, '20px');
  Cj(E2S, '20px');
  E2S.style.backgroundColor = '#fff';
  E2S.appendChild(function ()
  {
    var zF = document.createElement('div');
    var uF = document.createElement('div');
    uF.appendChild(gX(x1('bringAllTabsIntoOneTab')));
    zF.appendChild(Tj(uF, 14, function ()
    {
      YK('sendAllTabsInAllWindowsToOneTabAction',
      {}, function ()
      {
        e1(function (ry)
        {
          u1(ry)
        })
      })
    }));
    return zF
  }());
  var A2S = 12.25;
  E2S.appendChild(function ()
  {
    var SF = document.createElement('div');
    SF.appendChild(Tj(x1('shareAllAsWebPage'), A2S, function (rq)
    {
      I(rq);
      rq.appendChild(document.createTextNode(x1('pleaseWaitTripleDot')));
      var Qq = [];
      e1(function (xe)
      {
        var Ke = xe['tabGroups'];
        if (!Ke) Ke = [];
        for (var pe = 0; pe < Ke.length; pe++)
        {
          var Fe = Ke[pe];
          if (!Fe['createDate']) Fe['createDate'] = new Date().getTime()
        }
        XX(Ke);
        for (var pe = 0; pe < Ke.length; pe++)
        {
          var Fe = Ke[pe];
          for (var Ie in Fe['tabsMeta']) Qq.push(Fe['tabsMeta'][Ie])
        }
        if (Qq.length == 0)
        {
          alert(x1('noTabsInOneTabYet'))
        }
        else
        {
          SX(Ke, function ()
          {
            I(rq);
            rq.appendChild(document.createTextNode(x1('shareAllAsWebPage')))
          })
        }
      })
    }));
    return SF
  }());
  E2S.appendChild(function ()
  {
    var PF = document.createElement('div');
    PF.appendChild(Tj(x1('exportImportUrls'), A2S, function ()
    {
      YK('showOrRefreshAndFocusScriptPage',
      {
        url: 'import-export.html'
      })
    }));
    return PF
  }());
  E2S.appendChild(function ()
  {
    var cF = document.createElement('div');
    cF.appendChild(Tj(x1('options'), A2S, function ()
    {
      YK('showOrRefreshAndFocusScriptPage',
      {
        url: 'options.html'
      })
    }));
    return cF
  }());
  E2S.appendChild(function ()
  {
    var gF = document.createElement('div');
    yX('may2013NewFeaturesIndicatorDisplayDate', function (Zq)
    {
      var Hq = Zq;
      if (!Hq)
      {
        Hq = new Date().getTime();
        NK('may2013NewFeaturesIndicatorDisplayDate', Hq)
      }
      var Tq = (new Date().getTime() - Hq) < 1000 * 3600 * 24 * 10;
      gF.appendChild(Tj(x1('features') + ' / ' + x1('help'), A2S, function ()
      {
        YK('createNewTab',
        {
          url: L1 + '/help'
        })
      }, Tq))
    });
    return gF
  }());
  E2S.appendChild(function ()
  {
    var wF = document.createElement('div');
    wF.appendChild(Tj(x1('about') + ' / ' + x1('feedback'), A2S, function ()
    {
      YK('createNewTab',
      {
        url: L1
      })
    }));
    return wF
  }());
  return E2S
};

function yj()
{
  if (false && k6S)
  {
    window.R = false;
    window['WebFontConfig'] = {
      'google':
      {
        'families': ['Open Sans:400,600,300,700']
      },
      'active': function ()
      {
        window.R = true
      },
      'inactive': function ()
      {
        window.R = true
      }
    };
    var b2S = (function ()
    {
      var vF = document.createElement('script');
      vF.src = 'webfont.js';
      vF.type = 'text/javascript';
      vF.async = 'true';
      var NF = document.getElementsByTagName('link')[0];
      NF.parentNode.insertBefore(vF, NF)
    })();
    q1()
  }
  else
  {
    Y1(K1, function ()
    {
      q1()
    })
  }
  var q2S = 1000 * 3600 * 24 * 2;
  var O2S = 1000 * 3600 * 2;
  var X2S = function ()
  {
    setTimeout(function ()
    {
      YK('getExtensionKey',
      {}, function (me)
      {
        aX(L1 + '/api/newVersionCheck',
        {
          'version': y1,
          'extensionKey': me
        }, function (Hy)
        {
          if (Hy['upgradeAvailable'])
          {
            NK('availableVersion', Hy['availableVersion'], function ()
            {
              eX()
            })
          }
        });
        NK('nextVersionCheckDate', new Date().getTime() + q2S)
      })
    }, parseInt(Math.random() * O2S))
  };
  yX('nextVersionCheckDate', function (EF)
  {
    var iF = EF;
    if (!iF) iF = new Date().getTime() - 1000;
    setTimeout(function ()
    {
      X2S();
      setInterval(function ()
      {
        X2S()
      }, q2S)
    }, Math.max((iF - new Date().getTime()), 1))
  })
};

function eX()
{
  if (!k6S) return;
  UK(function (AF)
  {
    if (AF)
    {
      var XF = document.getElementById('updateAvailableMsgDiv');
      I(XF);
      b1(XF, '30px');
      XF.style.color = '#c00000';
      XF.style.maxWidth = '600px';
      XF.style.lineHeight = '2em';
      XF.appendChild(document.createTextNode('An update for '));
      XF.appendChild(cK());
      XF.appendChild(document.createTextNode(' is available - please click the '));
      XF.appendChild(RX(28, 3));
      XF.appendChild(document.createTextNode(' menu button in the top right of your browser and then click \"Update Google Chrome\". If that option is not available, click \"About Google Chrome\" followed by \"Relaunch\".'))
    }
  })
};

function q1()
{
  if (false && k6S)
  {
    if (!window.R)
    {
      setTimeout(function ()
      {
        q1()
      }, 10);
      return
    }
  }
  e1(function (bF)
  {
    u1(bF);
    XK()
  });
  document.addEventListener('mousedown', function ()
  {
    uX()
  }, false)
};

function u1(k2S)
{
  var h2S = document.getElementById('contentAreaDiv');
  I(h2S);
  h2S.style.paddingTop = '0px';
  h2S.style.paddingLeft = '0px';
  h2S.appendChild(dj());
  var s2S = k2S['tabGroups'];
  if (!s2S) s2S = [];
  for (var _2S = 0; _2S < s2S.length; _2S++)
  {
    var W2S = s2S[_2S];
    if (!W2S['createDate']) W2S['createDate'] = new Date().getTime()
  }
  var G2S = 0;
  for (var _2S = 0; _2S < s2S.length; _2S++)
  {
    var W2S = s2S[_2S];
    G2S += W2S['tabsMeta'].length
  }
  XX(s2S);
  var M2S = xj(G2S);
  var d2S = Vj(M2S);
  h2S.appendChild(d2S);
  var J2S = document.createElement('div');
  J2S.id = 'updateAvailableMsgDiv';
  h2S.appendChild(J2S);
  eX();
  JK('storedStateChanged', function (sF)
  {
    var kVS = sF.rW;
    var dF = kVS;
    var OF = dF['tabGroups'];
    if (!OF) OF = [];
    var sVS = 0;
    for (var hVS = 0; hVS < OF.length; hVS++)
    {
      var dVS = OF[hVS];
      sVS += dVS['tabsMeta'].length
    }
    var hF = xj(sVS);
    try
    {
      I(d2S);
      d2S.appendChild(document.createTextNode(hF))
    }
    catch (qF)
    {}
  });
  for (var _2S = 0; _2S < s2S.length; _2S++)
  {
    var W2S = s2S[_2S];
    h2S.appendChild(QX(W2S))
  }
  if (s2S.length == 0)
  {
    h2S.appendChild(function ()
    {
      var MVS = document.createElement('div');
      MVS.style.paddingTop = '30px';
      b1(MVS, '30px');
      MVS.style.width = '500px';
      MVS.appendChild(document.createTextNode(x1('emptyOneTabInfoMsg')));
      return MVS
    }())
  }
  h2S.appendChild(function ()
  {
    var GVS = document.createElement('div');
    GVS.style.paddingTop = '30px';
    return GVS
  }())
};

function kK(BjS)
{
  return BjS
}
