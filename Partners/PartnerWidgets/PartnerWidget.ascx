<%@ Control Language="C#" %>
<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI" Assembly="Telerik.Sitefinity" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI.ContentUI" Assembly="Telerik.Sitefinity" %>
<%@ Register TagPrefix="sf" Namespace="Telerik.Sitefinity.Web.UI.PublicControls.BrowseAndEdit"
    Assembly="Telerik.Sitefinity" %>
<%@ Register Assembly="Telerik.Sitefinity" Namespace="Telerik.Sitefinity.Modules.Comments.Web.UI.Frontend" TagPrefix="comments" %>
<%@ Import Namespace="Telerik.Sitefinity" %>
<%@ Import Namespace="Telerik.Sitefinity.Web.UI" %>

<sf:SitefinityLabel id="title" runat="server" WrapperTagName="div" HideIfNoText="true" HideIfNoTextMode="Server" /> 
<telerik:RadListView ID="SingleItemContainer" ItemPlaceholderID="ItemContainer" AllowPaging="False"
    runat="server" EnableEmbeddedSkins="false" EnableEmbeddedBaseStylesheet="false">
    <layouttemplate>
       <h1>Partners</h1>
       <asp:PlaceHolder ID="ItemContainer" runat="server" />
    </layouttemplate>
    <itemtemplate>
    </itemtemplate>
</telerik:RadListView>