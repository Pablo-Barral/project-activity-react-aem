/*
 * ***********************************************************************
 * Compass Logon CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass Logon.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass Logon and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass Logon
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass Logon.
 * ***********************************************************************
 */

package com.compasslogon.core.models.impl;

import com.compasslogon.core.models.TextContent;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = TextContent.class, resourceType = "compasslogon/components/content/text-content")
public class TextContentImpl
    implements TextContent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String color;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String size;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String weight;

    @Override
    public String getColor() {
        return color;
    }

    @Override
    public String getSize() {
        return size;
    }

    @Override
    public String getText() {
        return text;
    }

    @Override
    public String getWeight() {
        return weight;
    }

}
