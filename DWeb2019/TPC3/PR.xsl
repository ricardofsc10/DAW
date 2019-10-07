<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>PROJECT RECORD</title>
                <meta charset="UTF-8"/>
            </head>
            
            <body>
                <h1><center>Project Record</center></h1>
                <xsl:apply-templates/>
                
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="metadata">
        <hr/>
        <table >
            <tr>
                <td>
                    
                    <strong> KEY NAME: </strong> 
                    <xsl:value-of select="keyname"/>
                </td>
                <td>
                    <strong> BEGIN DATE: </strong> 
                   <xsl:value-of select="bdate"/>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>TITLE:</strong> 
                    <xsl:value-of select="title"/>
                </td>
                <td>
                    <strong>END DATE:</strong> 
                    <xsl:value-of select="edate"/>
                </td>
            </tr>
            <tr>
                <xsl:choose>
                    <xsl:when test="subtitle">
                        <td>
                            <strong>SUBTITLE:</strong> 
                            <xsl:value-of select="subtitle"/>
                        </td>
                    </xsl:when>
                </xsl:choose>
                <td>
                    <strong>SUPERVISOR:</strong> 
                    <a href="{supervisor/@homepage}">      
                        <xsl:value-of select="supervisor"/>
                    </a>
                </td>
            </tr>
        </table>
    </xsl:template>
    
    <xsl:template match="workteam">
        <hr/>
        <h3>WorkTeam:</h3>
        <xsl:apply-templates/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="worker">
        <li>
            <xsl:value-of select="name"/> - <xsl:value-of select="email"/>
            <xsl:choose>
                <xsl:when test="git"> - <a href="{git}"><xsl:value-of select="git"/></a></xsl:when>
            </xsl:choose>
        </li>
    </xsl:template>
    
    <xsl:template match="abstract">
        <hr/>
        <h3>ABSTRACT: </h3>
        <xsl:apply-templates/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <li>
            <a href="{@path}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="p">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
</xsl:stylesheet>