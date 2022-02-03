<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match= "/">
    <html>
      <body style="background: linear-gradient(to bottom right, #ffffcc 0%, #ff99ac 100%)">
        <h2>Catalog</h2>
        <ul>
          <hgroup>
            <h3><xsl:value-of select="concat('Product ID: ', //product/@product_id)"/></h3>
            <p><xsl:value-of select="//product/@description"/></p>
          </hgroup>
          <xsl:for-each select="//product">
            <li>
              <article style="margin-bottom: 50px;">
               
                <table border="1">
                  <tr bgcolor="#f1cf9c">
                    <th>Item number</th> 
                    <th>Price</th> 
                    <th>Gender</th> 
                    <th>Small</th> 
                    <th>Medium</th> 
                    <th>Large</th> 
                    <th>Extra Large</th> 
                  </tr> 
                  
                  <xsl:for-each select="//catalog_item"> 
                    <tr>
                      <td><xsl:value-of select="item_number"/></td>
                      <td><xsl:value-of select="price"/></td>
                      <td>
                        <xsl:choose>
                          <xsl:when test= "@gender = 'Men'">M</xsl:when>
                          <xsl:otherwise>W</xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td>
                       <xsl select="size">
                        <table border='1'>
                          <xsl:if test="size/@description = 'Small'">
                            <tr style="margin:auto">
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Small']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size">
                        <table border='1'>
                          <xsl:if test="size/@description = 'Medium'">
                            <tr style="margin:auto">
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Medium']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size">
                        <table style="margin:auto; width:100%; justify-content:start;" border='1'>
                          <xsl:if test="size/@description = 'Large'">
                            <tr style="margin:auto">
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Large']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>
                      <td>
                       <xsl select="size">
                        <table border='1'>
                          <xsl:if test="size/@description = 'Extra Large'">
                            <tr style="margin:auto">
                              <th>Color</th>
                              <th>Image</th>
                            </tr>
                          
                            <xsl:for-each select="size[@description='Extra Large']/color_swatch"> 
                              <tr>
                                <td><xsl:value-of select="."/></td>
                                <td><xsl:value-of select="./@image"/></td>
                              </tr>
                            </xsl:for-each>
                          </xsl:if>
                        </table>
                       </xsl>
                      </td>

                        
                    </tr>
                  </xsl:for-each> 
                </table>
              </article>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>