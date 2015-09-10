using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Partners
{
    [DefaultProperty("Text")]
    [ToolboxData("<{0}:Partners runat=server></{0}:Partners>")]
    public class Partners : WebControl
    {
        [Bindable(true)]
        [Category("Appearance")]
        [DefaultValue("")]
        [Localizable(true)]
        public string Text
        {
            get
            {
                String s = (String)ViewState["Text"];
                return ((s == null)? "[" + this.ID + "]" : s);
            }
 
            set
            {
                ViewState["Text"] = value;
            }
        }
 
        protected override void RenderContents(HtmlTextWriter output)
        {
            output.Write(Text);
        }
        /* potected override string LayoutTemplateName
        {
            get
            {
                if (this.DesignerTemplateName != null) return this.DesignerTemplateName;
                return "Partners.PartnerWidgets.PartnerWidget.ascx";
            }
        }*/
    }
}
